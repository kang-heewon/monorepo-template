import path from 'node:path';
import { fileURLToPath } from 'node:url';

import js from '@eslint/js';
import importX from 'eslint-plugin-import-x';
import jsonc from 'eslint-plugin-jsonc';
import * as packageJson from 'eslint-plugin-package-json';
import prettierConfig from 'eslint-config-prettier';
import * as jsoncParser from 'jsonc-eslint-parser';
import tseslint from 'typescript-eslint';

import noCrossDomainImportPlugin from '../rules/no-cross-domain-import.mjs';
import noDatasourceImportPlugin from '../rules/no-datasource-import.mjs';
import typeGraphqlPlugin from '../rules/type-graphql-explicit-type.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../../../../../');

const architectureScope = '@slackbase.org';

const base = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...(Array.isArray(prettierConfig) ? prettierConfig : [prettierConfig]),
  {
    name: 'base:common',
    linterOptions: { reportUnusedDisableDirectives: true },
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
    },
    plugins: {
      'import-x': importX,
      'type-graphql': typeGraphqlPlugin,
      'monorepo-architecture': {
        rules: {
          ...noCrossDomainImportPlugin.rules,
          ...noDatasourceImportPlugin.rules,
        },
      },
    },
    rules: {
      'monorepo-architecture/no-cross-domain-import': ['error', { scope: architectureScope, rootDir: projectRoot }],
      'monorepo-architecture/no-datasource-import': ['error', { scope: architectureScope }],

      'import-x/extensions': 'off',
      'import-x/no-cycle': 'error',
      'import-x/no-extraneous-dependencies': 'off',
      'import-x/no-named-as-default': 'off',
      'import-x/no-relative-packages': 'off',
      'import-x/no-self-import': 'error',
      'import-x/order': [
        'error',
        {
          groups: ['internal', 'external', 'builtin', 'parent', 'sibling'],
          pathGroups: [
            { pattern: '@*/**', group: 'internal', position: 'before' },
            { pattern: '@*/**', group: 'external', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: [],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import-x/prefer-default-export': 'off',

      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

      'type-graphql/explicit-type': 'error',
    },
    settings: {
      'import-x/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
    },
  },

  // JSON files
  {
    files: ['**/*.json'],
    languageOptions: { parser: jsoncParser },
    plugins: { jsonc },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'off',
      'jsonc/sort-keys': ['error'],
    },
  },

  // package.json
  {
    files: ['**/package.json'],
    languageOptions: { parser: jsoncParser },
    plugins: { 'package-json': packageJson },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'off',
      'jsonc/sort-keys': 'off',
      'package-json/sort-collections': 'error',
    },
  },
];

export default base;
