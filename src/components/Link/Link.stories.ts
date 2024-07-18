import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Link } from './Link'

const meta = {
  title: 'Components/Link',
  component: Link,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  args: {}
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const LinkNormal: Story = {
  args: {
    size: 'default',
    variant: 'link',
    children: 'Click me'
  }
}

export const LinkExternal: Story = {
  args: {
    size: 'default',
    variant: 'link',
    external: true
  }
}
