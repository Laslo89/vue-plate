import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './vitest.setup.ts', // Lädt die Setup-Datei für globale Mocks
      coverage: {
        reporter: ['text', 'json', 'html'], // Optional: Coverage-Reporter einrichten
      },
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  })
)
