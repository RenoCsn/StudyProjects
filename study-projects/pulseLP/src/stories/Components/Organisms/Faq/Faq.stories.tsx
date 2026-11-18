import type { Meta, StoryObj } from '@storybook/react-vite'
import { FaqComponent } from '../../../../Components/Organisms/Faq'
import { faqTexts } from '../../../../content'

const meta = {
  title: 'Organisms/Faq',
  component: FaqComponent,
  argTypes: {},
} satisfies Meta<typeof FaqComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: faqTexts.title,
    faqItens: faqTexts.faqItens,
  },
}
