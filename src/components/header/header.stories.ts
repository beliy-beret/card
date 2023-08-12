import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '.'

import logo from 'assets/images/Logo.png'
import ava from 'assets/images/user.jpg'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    logo: logo,
    userAva: ava,
    userName: 'Andrey',
    isLogged: false,
  },
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const WithContainer: Story = {
  args: {
    container: true,
  },
}
