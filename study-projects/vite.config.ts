/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { playwright } from '@vitest/browser-playwright'
const dirname =
  typeof import.meta.dirname !== 'undefined'
    ? import.meta.dirname
    : path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    open: true,
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
        },
      },
      {
        // DOM snapshots for the dev page and for stories reused outside Storybook.
        // This project stays in jsdom so it does not need a browser binary.
        extends: true,
        test: {
          name: 'snapshots',
          environment: 'jsdom',
          setupFiles: ['./src/test/setup.ts'],
          include: ['src/**/*.snapshot.test.tsx'],
        },
      },
      {
        extends: true,
        test: {
          name: 'screenshots',
          include: ['src/**/*.screenshots.test.tsx'],
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            expect: {
              toMatchScreenshot: {
                comparatorName: 'pixelmatch',
                comparatorOptions: {
                  threshold: 0.2,
                  allowedMismatchedPixelRatio: 0.01,
                },
              },
            },
            instances: [
              { browser: 'chromium', viewport: { width: 1280, height: 720 } },
            ],
          },
        },
      },
    ],
  },
})
