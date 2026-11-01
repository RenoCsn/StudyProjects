import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProductComponent } from '../../../../Components/Organisms/Product'

const meta = {
  title: 'Organisms/Product',
  component: ProductComponent,
  argTypes: {},
} satisfies Meta<typeof ProductComponent>

export default meta

type Story = StoryObj<typeof meta>

const freeCard = (
  <div style={{ width: '33.33333%', padding: '2rem', display: 'flex' }}></div>
)

const normalCard = (
  <div style={{ width: '33.33333%', padding: '2rem', display: 'flex' }}></div>
)

const premiumCard = (
  <div style={{ width: '33.33333%', padding: '2rem', display: 'flex' }}></div>
)

export const Default: Story = {
  args: {
    title: (
      <>
        Try Pulse free for
        <br />
        30 days.
      </>
    ),
    subtitle:
      'See why Pulse is the best way to monitor your cash flow. Sign up for any plan and try Pulse absolutely free for 30 days.',
    freeCard: freeCard,
    normalCard: normalCard,
    premiumCard: premiumCard,
  },
}
