const rule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Require explicit type for @Field decorator with nullable option',
    },
    messages: {
      missingExplicitType:
        '@Field with { nullable: true } must have explicit type: @Field(() => Type, { nullable: true })',
    },
    schema: [],
  },
  create(context) {
    return {
      Decorator(node) {
        const { expression } = node;

        if (expression.type !== 'CallExpression') return;
        if (expression.callee.type !== 'Identifier') return;
        if (expression.callee.name !== 'Field') return;

        const args = expression.arguments;
        if (args.length !== 1) return;

        const firstArg = args[0];
        if (firstArg.type !== 'ObjectExpression') return;

        const hasNullable = firstArg.properties.some(
          prop =>
            prop.type === 'Property' &&
            prop.key.type === 'Identifier' &&
            prop.key.name === 'nullable' &&
            prop.value.type === 'Literal' &&
            prop.value.value === true
        );

        if (hasNullable) {
          context.report({
            node,
            messageId: 'missingExplicitType',
          });
        }
      },
    };
  },
};

export const typeGraphqlPlugin = {
  meta: {
    name: 'eslint-plugin-type-graphql',
    version: '1.0.0',
  },
  rules: {
    'explicit-type': rule,
  },
};

export default typeGraphqlPlugin;
