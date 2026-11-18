import type { Meta, StoryObj } from '@storybook/react-vite'

import { TypographyComponent } from '../../../../Components/Atoms/Typography/index'

const meta = {
  title: 'Atoms/Typography',
  component: TypographyComponent,
  argTypes: {
    variant: {
      table: {
        type: {
          summary: 'h1, h2, h3, h4, h5, p, span',
        },
      },
    },
    color: {
      table: {
        type: {
          summary: 'primary, textPrimary, textSecondary, background',
        },
      },
    },
  },
} satisfies Meta<typeof TypographyComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Teste',
  },
}

export const Color: Story = {
  parameters: {
    docs: {
      description: {
        storybook: 'Typography with textSecondary',
      },
    },
  },
  args: {
    children: 'Typography with other color',
    color: 'textSecondary',
  },
}

export const Variant: Story = {
  args: {
    children: 'Typography as H1 style.',
    variant: 'h1',
  },
}
