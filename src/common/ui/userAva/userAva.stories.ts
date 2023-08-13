import type { Meta, StoryObj } from '@storybook/react'

import { UserAva } from './UserAva'

import ava from 'common/assets/images/user.jpg'

const meta = {
  title: 'Components/UserAva',
  component: UserAva,
  tags: ['autodocs'],
  args: {
    src: ava,
  },
  argTypes: {
    variant: {
      options: ['round', 'square'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof UserAva>

export default meta
type Story = StoryObj<typeof meta>

export const RoundSmall: Story = {
  args: {
    variant: 'round',
    size: 'small',
  },
}

export const RoundLarge: Story = {
  args: {
    variant: 'round',
    size: 'large',
  },
}

export const SquareSmall: Story = {
  args: {
    variant: 'square',
    size: 'small',
  },
}

export const SquareLarge: Story = {
  args: {
    variant: 'square',
    size: 'large',
  },
}
