module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    // 'google',
    'plugin:@typescript-eslint/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['**/tsconfig.json', '**/tsconfig.dev.json'],
    sourceType: 'module'
  },
  ignorePatterns: [
    '/lib/**/*' // Ignore built files.
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'quote-props': ['error', 'as-needed'],
    indent: ['error', 2],
    semi: ['error', 'never'],
    'import/no-unresolved': 0,
    'space-before-function-paren': 'off',
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'no-useless-constructor': 0
  }
}
