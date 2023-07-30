import { ComponentPropsWithoutRef, ElementType } from 'react'

import css from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  variant?:
    | 'Large'
    | 'H1'
    | 'H2'
    | 'H3'
    | 'Body_1'
    | 'Body_2'
    | 'Subtitle_1'
    | 'Subtitle_2'
    | 'Caption'
    | 'Overline'
    | 'Link_1'
    | 'Link_2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { variant = 'Body_1', fullWidth, className, as: Component = 'p', ...rest } = props

  return (
    <Component className={`${css.text} ${css[variant]} ${className}`} {...rest}>
      {rest.children}
    </Component>
  )
}
