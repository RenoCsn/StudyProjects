import type { Meta, StoryObj } from '@storybook/react-vite'
import { FooterComponent } from '../../../../Components/Organisms/Footer'
import logoImg from '../../../../assets/pulse-logo.svg'
import { footerTexts } from '../../../../content'

const meta = {
  title: 'Organisms/Footer',
  component: FooterComponent,
  argTypes: {},
} satisfies Meta<typeof FooterComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    logo: {
      url: '#',
      img: logoImg,
    },
    btnText: footerTexts.btnText,
    menuFirstColumn: footerTexts.menuFirstColumn,
    menuSecondColumn: footerTexts.menuSecondColumn,
    menuThirdColumn: footerTexts.menuThirdColumn,
  },
}
