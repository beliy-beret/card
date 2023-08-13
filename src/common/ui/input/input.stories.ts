import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    onClear: () => {},
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultImport: Story = {
  args: {
    type: 'text',
  },
}

export const InputWithLabel: Story = {
  args: {
    label: 'Input',
  },
}

export const ErrorInput: Story = {
  args: {
    error: true,
  },
}

export const InputWithErrorMessage: Story = {
  args: {
    errorMessage: 'Error message',
  },
}

export const TypeSearch: Story = {
  args: {
    type: 'search',
  },
}

export const TypePassword: Story = {
  args: {
    type: 'password',
    label: 'password',
  },
}
