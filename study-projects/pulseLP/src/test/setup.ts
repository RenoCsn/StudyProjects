import { cleanup } from '@testing-library/react'
import { setProjectAnnotations } from '@storybook/react-vite'
import { afterEach, beforeAll } from 'vitest'
import * as previewAnnotations from '../../.storybook/preview'

// Portable stories only pick up .storybook/preview.tsx when this runs first.
const annotations = setProjectAnnotations([previewAnnotations])

beforeAll(annotations.beforeAll)

afterEach(() => {
  cleanup()
})
