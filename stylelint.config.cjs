module.exports = {
  plugins: [
    'stylelint-scss', // SCSS spezifische Regeln
    '@namics/stylelint-bem', // BEM spezifische Regeln
    '@stylistic/stylelint-plugin',
  ],
  extends: [
    'stylelint-config-standard', // Standard CSS Regeln
    'stylelint-config-standard-scss', // SCSS spezifische Regeln
    'stylelint-config-recess-order', // CSS Eigenschaftsreihenfolge
    'stylelint-config-html/vue', // Vue und HTML Unterstützung
  ],
  rules: {
    '@stylistic/at-rule-name-case': 'lower',
    '@stylistic/at-rule-name-space-after': 'always-single-line',
    '@stylistic/at-rule-semicolon-newline-after': 'always',
    '@stylistic/block-closing-brace-empty-line-before': 'never',
    '@stylistic/block-closing-brace-newline-after': 'always',
    '@stylistic/block-closing-brace-newline-before': 'always-multi-line',
    '@stylistic/block-closing-brace-space-before': 'always-single-line',
    '@stylistic/block-opening-brace-newline-after': 'always-multi-line',
    '@stylistic/block-opening-brace-space-after': 'always-single-line',
    '@stylistic/block-opening-brace-space-before': 'always',
    '@stylistic/color-hex-case': 'lower',
    '@stylistic/declaration-bang-space-after': 'never',
    '@stylistic/declaration-bang-space-before': 'always',
    '@stylistic/declaration-block-semicolon-newline-after': 'always-multi-line',
    '@stylistic/declaration-block-semicolon-space-after': 'always-single-line',
    '@stylistic/declaration-block-semicolon-space-before': 'never',
    '@stylistic/declaration-block-trailing-semicolon': null,
    '@stylistic/declaration-colon-newline-after': 'always-multi-line',
    '@stylistic/declaration-colon-space-after': 'always-single-line',
    '@stylistic/declaration-colon-space-before': 'never',
    '@stylistic/function-comma-newline-after': 'always-multi-line',
    '@stylistic/function-comma-space-after': 'always-single-line',
    '@stylistic/function-comma-space-before': 'never',
    '@stylistic/function-max-empty-lines': 0,
    '@stylistic/function-parentheses-newline-inside': 'always-multi-line',
    '@stylistic/function-parentheses-space-inside': 'never-single-line',
    '@stylistic/function-whitespace-after': 'always',
    '@stylistic/indentation': 2,
    '@stylistic/max-empty-lines': 1,
    '@stylistic/max-line-length': 120,
    '@stylistic/media-feature-colon-space-after': 'always',
    '@stylistic/media-feature-colon-space-before': 'never',
    '@stylistic/media-feature-name-case': 'lower',
    '@stylistic/media-feature-parentheses-space-inside': 'never',
    '@stylistic/media-feature-range-operator-space-after': 'always',
    '@stylistic/media-feature-range-operator-space-before': 'always',
    '@stylistic/media-query-list-comma-newline-after': 'always-multi-line',
    '@stylistic/media-query-list-comma-space-after': 'always-single-line',
    '@stylistic/media-query-list-comma-space-before': 'never',
    '@stylistic/no-empty-first-line': true,
    '@stylistic/no-eol-whitespace': true,
    '@stylistic/no-extra-semicolons': true,
    '@stylistic/no-missing-end-of-source-newline': true,
    '@stylistic/number-leading-zero': 'always',
    '@stylistic/number-no-trailing-zeros': true,
    '@stylistic/property-case': 'lower',
    '@stylistic/selector-attribute-brackets-space-inside': 'never',
    '@stylistic/selector-attribute-operator-space-after': 'never',
    '@stylistic/selector-attribute-operator-space-before': 'never',
    '@stylistic/selector-combinator-space-after': 'always',
    '@stylistic/selector-combinator-space-before': 'always',
    '@stylistic/selector-descendant-combinator-no-non-space': true,
    '@stylistic/selector-list-comma-newline-after': 'always',
    '@stylistic/selector-list-comma-space-before': 'never',
    '@stylistic/selector-max-empty-lines': 0,
    '@stylistic/selector-pseudo-class-case': 'lower',
    '@stylistic/selector-pseudo-class-parentheses-space-inside': 'never',
    '@stylistic/selector-pseudo-element-case': 'lower',
    '@stylistic/string-quotes': 'double',
    '@stylistic/unit-case': 'lower',
    '@stylistic/value-list-comma-newline-after': 'always-multi-line',
    '@stylistic/value-list-comma-space-after': 'always-single-line',
    '@stylistic/value-list-comma-space-before': 'never',
    '@stylistic/value-list-max-empty-lines': 0,
    // Allow newlines inside class attribute values
    'string-no-newline': null,
    'selector-id-pattern': /^[a-z][a-zA-Z]*$/,
    // Limit the number of universal selectors in a selector,
    // to avoid very slow selectors
    'selector-max-universal': 1,
    // Disallow allow global element/type selectors in scoped modules
    'selector-max-type': [1, { ignore: ['child', 'descendant', 'compounded'] }],
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
  ignoreFiles: ['node_modules', 'dist'],
}
