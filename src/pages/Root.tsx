import { ChangeEvent, useState } from 'react'

import logo from 'common/assets/images/Logo.png'
import user from 'common/assets/images/user.jpg'
import { Input } from 'common/ui/input'
import { Header } from 'components/header'

export const Root = () => {
  const [value, setValue] = useState('some text')
  const valueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return (
    <>
      <Header isLogged={false} logo={logo} userAva={user} userName="User" />
      <Input value={value} onChange={valueHandler} />
    </>
  )
}
