import { createElement, type ReactElement } from 'react'
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react-vite'
import { describe, expect, test } from 'vitest'

type StoryModule = Parameters<typeof composeStories>[0]

/**
 * Renders every story in a CSF file and compares the markup to a saved snapshot.
 * Play functions are not executed here; the Storybook Vitest project already runs those.
 */
export function snapshotStories(stories: StoryModule, suiteName: string) {
  const composed = composeStories(stories)

  describe(suiteName, () => {
    for (const [storyName, Story] of Object.entries(composed)) {
      test(`${storyName} matches snapshot`, () => {
        const { container } = render(
          createElement(Story as () => ReactElement),
        )
        expect(container).toMatchSnapshot()
      })
    }
  })
}
