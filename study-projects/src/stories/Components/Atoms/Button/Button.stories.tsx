import { expect, fn } from 'storybook/test'
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

export const Outlined: Story = {
  args: {
    children: 'Outlined',
    variant: 'outlined',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
}

export const Gradient: Story = {
  args: {
    children: 'Gradient',
    variant: 'gradient',
  },
}

export const OffsetAnimation: Story = {
  args: {
    children: 'Offset',
    variant: 'outlined',
    isAnimated: true,
    animationStyle: 'offset',
  },
}

export const ExpandAnimation: Story = {
  args: {
    children: 'Expand',
    variant: 'primary',
    isAnimated: true,
    animationStyle: 'expand',
  },
}

export const OnClick: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Button click function.',
      },
    },
  },
  args: {
    children: 'Click me!',
    onClick: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    const button = await canvas.findByRole('button', { name: 'Click me!' })

    await userEvent.click(button)

    await expect(args.onClick).toHaveBeenCalled()
  },
}
