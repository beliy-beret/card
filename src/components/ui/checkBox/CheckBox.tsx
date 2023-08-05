import { FC, ComponentProps } from 'react'

import css from './checkbox.module.scss'

type Props = ComponentProps<'input'> & {
  label?: string
}

export const CheckBox: FC<Props> = ({ label, ...props }) => (
  <label className={css.checkBox}>
    <input type="checkbox" {...props} />
    <span>{label}</span>
  </label>
)
