import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,ts,mts,tsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['node_modules/**', 'dist/**', '.vscode/**'],
  },
  {
    // Konfiguration für TypeScript-Dateien (.ts und .tsx)
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': ['error', { singleQuote: true, semi: false }],
      '@typescript-eslint/no-unused-vars': 'warn',
      ...typescriptEslint.configs.recommended.rules,
    },
  },
  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
]
