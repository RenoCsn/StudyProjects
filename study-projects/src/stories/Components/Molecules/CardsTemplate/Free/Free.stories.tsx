import type { Meta, StoryObj } from '@storybook/react-vite'
import { FreeCard } from '../../../../../Components/Molecules/CardsTemplate/Free'
import { CardComponent } from '../../../../../Components/Atoms/Card'

const meta = {
  title: 'Molecules/CardTemplate/Free',
  component: CardComponent,
} satisfies Meta<typeof CardComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <FreeCard />,
  },
}
