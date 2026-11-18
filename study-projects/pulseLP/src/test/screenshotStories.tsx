import { createElement, type ReactElement } from 'react'
import { composeStories } from '@storybook/react-vite'
import { render } from 'vitest-browser-react'
import { describe, expect, test } from 'vitest'

type StoryModule = Parameters<typeof composeStories>[0]

/**
 * Renders every story in a CSF file and compares the painted result to a PNG.
 * Play functions are not executed; the Storybook Vitest project already runs those.
 */
export function screenshotStories(stories: StoryModule, suiteName: string) {
  const composed = composeStories(stories)
  const screenshotPrefix = suiteName.replaceAll('/', '-')

  describe(suiteName, () => {
    for (const [storyName, Story] of Object.entries(composed)) {
      test(`${storyName} matches screenshot`, async () => {
        const screen = await render(
          createElement(Story as () => ReactElement),
        )
        await document.fonts.ready
        await expect(screen.locator).toMatchScreenshot(
          `${screenshotPrefix}-${storyName}`,
        )
      })
    }
  })
}
