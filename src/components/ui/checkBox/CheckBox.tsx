//import { FC, InputHTMLAttributes, DetailedHTMLProps } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'

import css from './checkbox.module.scss'

// type DefaultProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// type Props = DefaultProps

export const CheckBox = () => (
  <Checkbox.Root>
    <Checkbox.Indicator />
  </Checkbox.Root>
)
