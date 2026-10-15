import type { ReactNode } from 'react'

export type TypographyType = {
  children: ReactNode
  variant?: 'h1' | 'h2' | 'p' | 'span'
  color?: 'primary' | 'textPrimary' | 'textSecondary' | 'background'
}
