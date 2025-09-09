import reactHooks from 'eslint-plugin-react-hooks';

export default [
  reactHooks.configs['recommended-latest'],
  {
    rules: {
      'react-hooks/exhaustive-deps': ['warn', { enableDangerousAutofixThisMayCauseInfiniteLoops: true }],
    },
  },
];
