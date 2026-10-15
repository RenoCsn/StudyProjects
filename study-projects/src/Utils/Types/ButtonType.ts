import type { ReactNode } from 'react'

export type ButtonType = {
  children: ReactNode
  variant?: 'primary' | 'outlined' | 'gradient' | 'ghost'
  isAnimated?: boolean
  animationStyle?: 'offset' | 'expand'
}
