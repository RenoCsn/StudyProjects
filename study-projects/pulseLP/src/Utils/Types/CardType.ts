import type { ReactNode } from 'react'

export type CardType = {
  children: ReactNode
  variant?: 'free' | 'normal' | 'premium'
}
