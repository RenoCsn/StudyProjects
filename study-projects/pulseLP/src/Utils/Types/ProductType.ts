import type { ReactNode } from 'react'

export type ProductTitle = {
  lineOne: string
  lineTwo: string
}

export type ProductType = {
  title?: ProductTitle
  subtitle?: ReactNode
  freeCard?: ReactNode
  normalCard?: ReactNode
  premiumCard?: ReactNode
}
