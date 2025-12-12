const DOMAINS = ['user', 'billing', 'kudos', 'wiki'];
const LAYERS = ['domain', 'service', 'datasource', 'feature', 'shell', 'ui'];

function extractPackageInfo(importPath) {
  const match = importPath.match(/^@slackbase\.org\/([a-z]+)-([a-z]+)$/);
  if (!match) return null;

  const [, domain, layer] = match;
  if (!DOMAINS.includes(domain) || !LAYERS.includes(layer)) return null;

  return { domain, layer };
}

function getCurrentPackageInfo(filename) {
  const match = filename.match(/libs\/([a-z]+)\/([a-z]+)\//);
  if (!match) return null;

  const [, domain, layer] = match;
  if (!DOMAINS.includes(domain) || !LAYERS.includes(layer)) return null;

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
    schema: [],
  },
  create(context) {
    const filename = context.filename || context.getFilename();
    const currentPackage = getCurrentPackageInfo(filename);

    if (!currentPackage) return {};

    return {
      ImportDeclaration(node) {
        const importPath = node.source.value;
        const importPackage = extractPackageInfo(importPath);

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
