import type { Meta, StoryObj } from '@storybook/react-vite'
import { HeaderComponent } from '../../../../Components/Organisms/Header'
import logoImg from '../../../../assets/pulse-logo.svg'

const meta = {
  title: 'Organisms/Header',
  component: HeaderComponent,
  argTypes: {},
} satisfies Meta<typeof HeaderComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    logo: {
      url: '#',
      img: logoImg,
    },
  },
}
