module.exports = {
  'env': {
    'commonjs': true,
    node: true,
    'es2021': true,
    'jest': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 12
  },
  'rules': {
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'space-before-function-paren': ['error'],
    'space-infix-ops': ['error'],
    'no-multi-spaces': [ 'error' ],
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}
