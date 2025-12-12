const PROTECTED_LAYERS = ['domain', 'service'];

function isDatasourceImport(importPath) {
  return importPath.match(/^@slackbase\.org\/[a-z]+-datasource$/);
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
    schema: [],
  },
  create(context) {
    const filename = context.filename || context.getFilename();
    const currentLayer = getCurrentLayer(filename);

    if (!currentLayer || !PROTECTED_LAYERS.includes(currentLayer)) return {};

    return {
      ImportDeclaration(node) {
        const importPath = node.source.value;

        if (isDatasourceImport(importPath)) {
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
