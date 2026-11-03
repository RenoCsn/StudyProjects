import type { Meta, StoryObj } from '@storybook/react-vite'
import { FooterComponent } from '../../../../Components/Organisms/Footer'
import logoImg from '../../../../assets/pulse-logo.svg'

const meta = {
  title: 'Organisms/Footer',
  component: FooterComponent,
  argTypes: {},
} satisfies Meta<typeof FooterComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    logo: {
      url: '#',
      img: logoImg,
    },
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
  },
}
