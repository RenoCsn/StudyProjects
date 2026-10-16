import type { ReactNode } from 'react'

export type TypographyType = {
  children: ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'
  color?: 'primary' | 'textPrimary' | 'textSecondary' | 'background'
}
