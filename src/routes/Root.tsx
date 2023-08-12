import { ChangeEvent, useState } from 'react'

import logo from 'assets/images/Logo.png'
import user from 'assets/images/user.jpg'
import { Header } from 'components/header'
import { Input } from 'components/ui/input'

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
