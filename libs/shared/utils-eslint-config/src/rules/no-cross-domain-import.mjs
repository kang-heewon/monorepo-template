import fs from 'node:fs';
import path from 'node:path';

const LAYERS = ['domain', 'service', 'datasource', 'feature', 'shell', 'ui'];

let _domains = null;

function getDomains(rootDir) {
  if (_domains) return _domains;

  _domains = fs
    .readdirSync(path.join(rootDir, 'libs'))
    .filter(domain => domain !== 'shared' && !domain.startsWith('.'));

  return _domains;
}

function escapeForRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function extractPackageInfo(importPath, scope, domains) {
  const match = importPath.match(new RegExp(`^${escapeForRegExp(scope)}\/([a-z]+)-([a-z]+)$`));
  if (!match) return null;

  const [, domain, layer] = match;
  if (!domains.includes(domain) || !LAYERS.includes(layer)) return null;

  return { domain, layer };
}

function getCurrentPackageInfo(filename, domains) {
  const match = filename.match(/libs\/([a-z]+)\/([a-z]+)\//);
  if (!match) return null;

  const [, domain, layer] = match;
  if (!domains.includes(domain) || !LAYERS.includes(layer)) return null;

  return { domain, layer };
}

const rule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow cross-domain imports between domain packages',
    },
    messages: {
      crossDomainImport:
        "Cross-domain import not allowed: '{{currentDomain}}-{{currentLayer}}' cannot import from '{{importDomain}}-{{importLayer}}'. Use domain events for cross-domain communication.",
    },
    schema: [
      {
        type: 'object',
        properties: {
          scope: { type: 'string' },
          rootDir: { type: 'string' },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const [{ scope, rootDir } = {}] = context.options;
    const filename = context.filename || context.getFilename();
    const domains = getDomains(rootDir || process.cwd());
    const currentPackage = getCurrentPackageInfo(filename, domains);

    if (!scope || !currentPackage) return {};

    return {
      ImportDeclaration(node) {
        const importPath = node.source.value;
        const importPackage = extractPackageInfo(importPath, scope, domains);

        if (!importPackage) return;

        // Allow datasource-to-datasource imports across domains
        if (currentPackage.layer === 'datasource' && importPackage.layer === 'datasource') {
          return;
        }

        if (currentPackage.domain !== importPackage.domain) {
          context.report({
            node,
            messageId: 'crossDomainImport',
            data: {
              currentDomain: currentPackage.domain,
              currentLayer: currentPackage.layer,
              importDomain: importPackage.domain,
              importLayer: importPackage.layer,
            },
          });
        }
      },
    };
  },
};

const plugin = {
  rules: {
    'no-cross-domain-import': rule,
  },
};

export default plugin;
