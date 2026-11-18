export type Logo = {
  url?: string
  img?: string
}

export type NavItem = {
  label: string
  href: string
}
export type HeaderType = {
  logo?: Logo
  items?: NavItem[]
  mobileItems?: NavItem[]
  signUp?: NavItem
}
