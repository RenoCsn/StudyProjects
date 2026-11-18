import { snapshotStories } from './snapshotStories'

const storyModules = import.meta.glob<
  Parameters<typeof snapshotStories>[0]
>('../stories/**/*.stories.tsx', { eager: true })

for (const [filePath, stories] of Object.entries(storyModules)) {
  const suiteName = filePath
    .replace('../stories/', '')
    .replace(/\.stories\.tsx$/, '')

  snapshotStories(stories, suiteName)
}
