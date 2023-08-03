import { ComponentPropsWithoutRef, ElementType } from 'react'

import css from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  icon?: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    variant = 'primary',
    fullWidth,
    className,
    as: Component = 'button',
    icon,
    ...rest
  } = props

  return (
    <Component
      className={`${css.btn} ${css[variant]} ${fullWidth ? css.fullWidth : ''} ${className}`}
      {...rest}
    >
      {icon && <img src={icon} />}
      {rest.children}
    </Component>
  )
}
