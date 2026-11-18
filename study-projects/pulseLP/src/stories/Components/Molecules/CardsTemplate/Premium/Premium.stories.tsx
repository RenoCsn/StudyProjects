import type { Meta, StoryObj } from '@storybook/react-vite'
import { PremiumCard } from '../../../../../Components/Molecules/CardsTemplate/Premium'
import { CardComponent } from '../../../../../Components/Atoms/Card'

const meta = {
  title: 'Molecules/CardTemplate/Premium',
  component: CardComponent,
} satisfies Meta<typeof CardComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'premium',
    children: <PremiumCard />,
  },
}
