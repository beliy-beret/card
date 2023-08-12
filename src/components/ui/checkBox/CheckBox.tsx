import { FC } from 'react'

import * as RadixCheckbox from '@radix-ui/react-checkbox'

import css from './checkbox.module.scss'

import { CheckIcon } from 'assets/icons/CheckIcon'

type Props = {
  label?: string
  checked: boolean
  disabled?: boolean
  required?: boolean
  name?: string
  value?: string
  onCheckedChange: () => void
}

export const CheckBox: FC<Props> = ({ label, ...props }) => {
  return (
    <label className={css.checkBox}>
      <RadixCheckbox.Root className={css.box} {...props}>
        <RadixCheckbox.Indicator
          style={{
            padding: 0,
            margin: 0,
          }}
        >
          <CheckIcon />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <span>{label}</span>
    </label>
  )
}
