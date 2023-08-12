import type { Meta, StoryObj } from '@storybook/react'

import { CheckBox } from './CheckBox'

const meta = {
  title: 'Components/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Checked: Story = {
  args: {
    checked: true,
  },
}
export const CheckBoxWithLabel: Story = {
  args: {
    label: 'some text',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledAndChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
}
