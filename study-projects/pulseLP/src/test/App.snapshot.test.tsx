import { render } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from '../App'

test('dev page matches snapshot', () => {
  const { container } = render(<App />)
  expect(container).toMatchSnapshot()
})
