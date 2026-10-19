import { fn } from 'storybook/test'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ButtonComponent } from '../../../../Components/Atoms/Button/index'

const meta = {
  title: 'Atoms/Button',
  component: ButtonComponent,
  argTypes: {
    variant: {
      table: {
        type: {
          summary: 'primary, outlined, gradient, ghost',
        },
      },
    },
    animationStyle: {
      table: {
        type: {
          summary: 'offset, expand',
        },
      },
    },
  },
} satisfies Meta<typeof ButtonComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

export const OffsetAnimation: Story = {
  args: {
    children: 'Offset',
    variant: 'ghost',
    isAnimated: true,
    animationStyle: 'offset',
  },
}

export const ExpandAnimation: Story = {
  args: {
    children: 'Expand',
    variant: 'ghost',
    isAnimated: true,
    animationStyle: 'expand',
  },
}
