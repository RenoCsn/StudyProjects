import { setProjectAnnotations } from '@storybook/react-vite'
import { beforeAll } from 'vitest'
import * as previewAnnotations from '../../.storybook/preview'
import { screenshotStories } from './screenshotStories'

// Portable stories only pick up .storybook/preview.tsx when this runs first.
// That preview import also loads src/index.css into the browser page.
const annotations = setProjectAnnotations([previewAnnotations])

beforeAll(annotations.beforeAll)

const storyModules = import.meta.glob<
  Parameters<typeof screenshotStories>[0]
>('../stories/**/*.stories.tsx', { eager: true })

for (const [filePath, stories] of Object.entries(storyModules)) {
  const suiteName = filePath
    .replace('../stories/', '')
    .replace(/\.stories\.tsx$/, '')

  screenshotStories(stories, suiteName)
}
