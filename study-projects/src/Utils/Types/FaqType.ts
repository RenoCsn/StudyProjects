export type FaqItemType = {
  question?: string
  answer?: string
}

export type FaqType = {
  title?: string
  faqItens?: FaqItemType[]
}
