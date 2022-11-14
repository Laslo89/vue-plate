require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  extends: [
    'eslint:recommended',
    // 'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    'plugin:prettier/recommended',
    'plugin:md/prettier',
  ],
  rules: {
    'prefer-const': 'error',
    'no-prototype-builtins': 'off',
    'object-shorthand': ['error', 'always'],
    'prefer-template': 'error',
    'vue/comment-directive': 'off',
  },
  env: {
    'vue/setup-compiler-macros': true,
  },
  overrides: [
    {
      files: ['src/**/*'],
      env: {
        browser: true,
      },
    },
    {
      files: ['*.js', '*.cjs'],
      env: {
        node: true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
    {
      files: ['*.md'],
      parser: 'markdown-eslint-parser',
    },
  ],
}
