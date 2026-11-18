import type { Logo } from './HeaderType'

export type SiteMap = {
  menuName: string
  menuItems: {
    text: string
    url: string
  }[]
}

export type FooterType = {
  logo?: Logo
  btnText?: string
  menuFirstColumn?: SiteMap
  menuSecondColumn?: SiteMap
  menuThirdColumn?: SiteMap
}
