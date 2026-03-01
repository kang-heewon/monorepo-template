import globals from 'globals';

import base from './base.mjs';

export default [
  ...base,
  {
    name: 'node',
    languageOptions: {
      globals: globals.node,
    },
  },
];
