module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: "es5",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  proseWrap: "never",
  htmlWhitespaceSensitivity: "css",
  endOfLine: "lf",
  overrides:[ {
    files: '*.html',
    options: {
      parser: 'html'
    },
  }]
}
