import type { HeaderType } from '../Utils/Types/HeaderType'
export const headerTexts = {
  items: [
    { label: 'Features', href: '/features' },
    { label: 'Customer Stories', href: '/customers' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
  ],
  signUp: { label: 'Sign Up', href: '/signup' },
} satisfies Omit<HeaderType, 'logo'>
