module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['taro/react', 'prettier', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    'no-param-reassign': 'off',
    'no-console': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}
