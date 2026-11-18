import type { Meta, StoryObj } from '@storybook/react-vite'
import { CardComponent } from '../../../../Components/Atoms/Card'

const meta = {
  title: 'Atoms/Card',
  component: CardComponent,
  decorators: [
    (Story) => (
      <div style={{ width: '392px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CardComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <div style={{ width: '392px', height: '400px' }}></div>,
  },
}

export const Normal: Story = {
  args: {
    children: <div style={{ width: '392px', height: '400px' }}></div>,
    variant: 'normal',
  },
}

export const Premium: Story = {
  args: {
    children: <div style={{ width: '392px', height: '400px' }}></div>,
    variant: 'premium',
  },
}
