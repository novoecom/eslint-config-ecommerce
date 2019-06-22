module.exports = {
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module'
  },
  env: {
    node: true,
    mocha: true,
    es6: true
  },
  rules: {
    'standard/object-curly-even-spacing': [2, 'either'],
    'standard/array-bracket-even-spacing': [2, 'either'],
    'standard/computed-property-even-spacing': [2, 'even'],
    'standard/no-callback-literal': [2, ['cb', 'callback']],
    'no-var': 'warn',
    'prefer-const': 'error',
    'space-before-function-paren': ['warn', 'never'],
    'one-var': ['error', 'always'],
    'no-unused-vars': ['error'],
    'brace-style': ['error', 'stroustrup'],
    'prefer-template': ['error']
  }
}
