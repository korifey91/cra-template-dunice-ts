module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],
  rules: {
    'import-helpers/order-imports': [
      'error',
      {
        groups: [
          '/^react/',
          'module',
          ['parent', 'sibling', 'index'],
          '/.*(css|scss)$/',
        ],
        newlinesBetween: 'always',
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
