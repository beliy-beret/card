import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '.'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'Large',
        'H1',
        'H2',
        'H3',
        'Body_1',
        'Body_2',
        'Subtitle_1',
        'Subtitle_2',
        'Caption',
        'Overline',
        'Link_1',
        'Link_2',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

const paragraph =
  'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'

export const Body_1: Story = {
  args: {
    variant: 'Body_1',
    children: paragraph,
    as: 'p',
  },
}

export const Body_2: Story = {
  args: {
    variant: 'Body_2',
    children: paragraph,
    as: 'p',
  },
}

export const H1: Story = {
  args: {
    variant: 'H1',
    children: 'Carosserie Test Zürich',
    as: 'h1',
  },
}

export const H2: Story = {
  args: {
    variant: 'H2',
    children: 'Carosserie Test Zürich',
    as: 'h2',
  },
}

export const H3: Story = {
  args: {
    variant: 'H3',
    children: 'Carosserie Test Zürich',
    as: 'h3',
  },
}
