import type { Meta, StoryObj } from '@storybook/react'

import { CreatePassword } from './CreatePassword'

const meta = {
  title: 'Auth/CreatePasswordForm',
  component: CreatePassword,
  tags: ['autodocs'],
} satisfies Meta<typeof CreatePassword>

export default meta
type Story = StoryObj<typeof meta>

export const CreatePasswordForm: Story = {} as Story
