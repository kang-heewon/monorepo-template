const PROTECTED_LAYERS = ['domain', 'service'];

function escapeForRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function isDatasourceImport(importPath, scope) {
  return importPath.match(new RegExp(`^${escapeForRegExp(scope)}\/[a-z]+-datasource$`));
}

function getCurrentLayer(filename) {
  const match = filename.match(/libs\/[a-z]+\/([a-z]+)\//);
  if (!match) return null;
  return match[1];
}

const rule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow datasource imports from domain and service layers',
    },
    messages: {
      datasourceImport:
        "Datasource import not allowed in '{{layer}}' layer. Datasource should only be imported in apps or through DI container setup.",
    },
    schema: [
      {
        type: 'object',
        properties: {
          scope: { type: 'string' },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const [{ scope } = {}] = context.options;
    const filename = context.filename || context.getFilename();
    const currentLayer = getCurrentLayer(filename);

    if (!scope || !currentLayer || !PROTECTED_LAYERS.includes(currentLayer)) return {};

    return {
      ImportDeclaration(node) {
        const importPath = node.source.value;

        if (isDatasourceImport(importPath, scope)) {
          context.report({
            node,
            messageId: 'datasourceImport',
            data: {
              layer: currentLayer,
            },
          });
        }
      },
    };
  },
};

const plugin = {
  rules: {
    'no-datasource-import': rule,
  },
};

export default plugin;
