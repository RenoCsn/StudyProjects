import type { ProductType } from '../Utils/Types/ProductType'

export const productTexts = {
  title: {
    lineOne: 'Try Pulse free for ',
    lineTwo: '30 days.',
  },
  subtitle:
    'See why Pulse is the best way to monitor your cash flow. Sign up for any plan and try Pulse absolutely free for 30 days.',
} satisfies Omit<ProductType, ''>
