import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { FstlnTable } from './Table'

const meta = {
  title: 'Components/FstlnTable',
  component: FstlnTable,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  args: {}
} satisfies Meta<typeof FstlnTable>

export default meta
type Story = StoryObj<typeof meta>

export const FstlnTableNormal: Story = {
  args: {}
}
