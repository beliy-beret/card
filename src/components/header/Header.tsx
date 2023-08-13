import { FC } from 'react'

import css from './header.module.scss'

import { Button } from 'common/ui/button'
import { UserAva } from 'common/ui/userAva'

export type HeaderProps = {
  logo: string
  userAva: string
  userName: string
  isLogged: boolean
  theme?: 'light' | 'dark'
  container?: boolean
}

export const Header: FC<HeaderProps> = ({
  logo,
  userAva,
  userName,
  isLogged,
  theme = 'dark',
  container = true,
}) => {
  return (
    <header className={`${css.header} ${css[theme]}`}>
      <div className={`${css.wrapper} ${container ? css.container : ''}`}>
        <img src={logo} alt="logo" />
        {isLogged ? (
          <div className={css.userInfo}>
            <span>{userName}</span>
            <UserAva src={userAva} />
          </div>
        ) : (
          <Button variant="primary">Sign in</Button>
        )}
      </div>
    </header>
  )
}
