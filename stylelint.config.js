module.exports = {
  extends: [
    // Use the Standard config as the base
    // https://github.com/stylelint/stylelint-config-standard
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-html/vue',
    // Enforce a standard order for CSS properties
    // https://github.com/stormwarning/stylelint-config-recess-order
    'stylelint-config-recess-order',
    // Override rules that would interfere with Prettier
    // https://github.com/shannonmoeller/stylelint-config-prettier
    'stylelint-config-prettier',
  ],
  plugins: [
    // Bring in some extra rules for SCSS
    'stylelint-scss',
    '@namics/stylelint-bem',
  ],
  // Rule lists:
  // - https://stylelint.io/user-guide/rules/
  // - https://github.com/kristerkari/stylelint-scss#list-of-rules
  rules: {
    // Allow newlines inside class attribute values
    'string-no-newline': null,
    'selector-id-pattern': /^[a-z][a-zA-Z]*$/,
    // Limit the number of universal selectors in a selector,
    // to avoid very slow selectors
    'selector-max-universal': 1,
    // Disallow allow global element/type selectors in scoped modules
    'selector-max-type': [0, { ignore: ['child', 'descendant', 'compounded'] }],
    // PRETTIER
    // HACK: to compensate for https://github.com/shannonmoeller/stylelint-config-prettier/issues/4
    // Modifying setting from Standard: https://github.com/stylelint/stylelint-config-standard/blob/7b76d7d0060f2e13a331806a09c2096c7536b0a6/index.js#L6
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else'],
      },
    ],
    'color-hex-length': 'long',
    // SCSS
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': /^(\w+-*)+$/,
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true,
    // Allow SCSS and CSS module keywords beginning with `@`
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'selector-class-pattern': null,
    'plugin/stylelint-bem-namics': {
      namespaces: [],
      patternPrefixes: [],
    },
  },
}
