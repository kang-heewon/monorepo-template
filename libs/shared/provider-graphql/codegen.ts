import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: '../../../apps/graphql-api/schema.graphql',
  documents: [`../../**/*.{ts,tsx}`, '!../../**/node_modules/**'],
  ignoreNoDocuments: true,
  generates: {
    'src/libs/': {
      preset: 'client',
      config: {
        enumsAsConst: true,
        namingConvention: 'keep',
        immutableTypes: true,
        defaultScalarType: 'unknown',
        scalars: {
          DateTimeISO: 'string',
        },
        useTypeImports: true,
        declarationKind: 'interface',
      },
    },
  },
};
export default config;
