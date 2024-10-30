import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  args: {
    onClick: fn(),
    size: 'default',
    variant: 'default',
    loading: false,
    disabled: false,
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const NormalButton: Story = {
  args: {
    size: 'default',
    variant: 'default',
    children: 'Click me'
  }
}

export const DisableButton: Story = {
  args: {
    size: 'default',
    variant: 'default',
    disabled: true,
    children: 'Click me'
  }
}
