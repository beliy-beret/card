import type { Meta, StoryObj } from '@storybook/react'

import { RestorePassword } from './RestorePassword'

const meta = {
  title: 'Auth/RestorePasswordForm',
  component: RestorePassword,
  tags: ['autodocs'],
} satisfies Meta<typeof RestorePassword>

export default meta
type Story = StoryObj<typeof meta>

export const RestorePasswordForm: Story = {} as Story
