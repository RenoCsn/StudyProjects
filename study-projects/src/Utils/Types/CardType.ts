import type { ReactNode } from 'react'

export type CardType = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
}
