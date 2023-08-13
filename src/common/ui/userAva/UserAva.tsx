import { FC } from 'react'

import css from './userAva.module.scss'

export type UserAvaProps = {
  variant?: 'round' | 'square'
  size?: 'small' | 'large'
  src: string
}

export const UserAva: FC<UserAvaProps> = ({ src, size = 'small', variant = 'round' }) => {
  return (
    <div className={`${css.userAva} ${css[size]} ${css[variant]}`}>
      <img src={src} alt="user avatar" />
    </div>
  )
}
