module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: false },
    ],
    'import/extensions': 'off',
    'no-console': ['error', { allow: ['warn'] }],
    'no-use-before-define': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        endOfLine: 'auto',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
  },
}
