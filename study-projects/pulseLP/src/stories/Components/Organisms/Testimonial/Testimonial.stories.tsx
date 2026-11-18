import type { Meta, StoryObj } from '@storybook/react-vite'
import { TestimonialComponent } from '../../../../Components/Organisms/Testimonial'

import logoImg from '../../../../assets/subvert-avatar.webp'
import { testimonialTexts } from '../../../../content'

const meta = {
  title: 'Organisms/Testimonial',
  component: TestimonialComponent,
  argTypes: {},
} satisfies Meta<typeof TestimonialComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    img: logoImg,
    testimonialText: testimonialTexts.testimonialText,
    brandName: testimonialTexts.brandName,
  },
}
