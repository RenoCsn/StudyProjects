import type { Meta, StoryObj } from '@storybook/react-vite'
import { NormalCard } from '../../../../../Components/Molecules/CardsTemplate/Normal'
import { CardComponent } from '../../../../../Components/Atoms/Card'

const meta = {
  title: 'Molecules/CardTemplate/Normal',
  component: CardComponent,
} satisfies Meta<typeof CardComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'normal',
    children: <NormalCard />,
  },
}
