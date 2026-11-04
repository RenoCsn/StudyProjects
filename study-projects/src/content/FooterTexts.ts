import type { FooterType } from '../Utils/Types/FooterType'

export const footerTexts = {
  btnText: 'Sign Up for a Free 30-Day Trial',
  menuFirstColumn: {
    menuName: 'Product',
    menuItems: [
      { text: 'Features', url: 'https://pulseapp.com/features' },
      { text: 'Pricing', url: 'https://pulseapp.com/pricing' },
      { text: 'Sign-Up', url: 'https://signup.pulseapp.com/' },
    ],
  },
  menuSecondColumn: {
    menuName: 'Company',
    menuItems: [
      {
        text: 'Customer Stories',
        url: 'https://pulseapp.com/customer-stories',
      },
      { text: 'About', url: 'https://pulseapp.com/about' },
      { text: 'Contact', url: 'https://pulseapp.com/pricing#' },
    ],
  },
  menuThirdColumn: {
    menuName: 'Resources',
    menuItems: [
      { text: 'Support', url: 'https://help.pulseapp.com/' },
      { text: 'Blog', url: 'https://pulseapp.com/blog' },
    ],
  },
} as const satisfies Omit<FooterType, 'logo'>
