import { Outlet } from 'react-router-dom'

import { Header } from './components/header'

import logo from 'common/assets/images/Logo.png'
import user from 'common/assets/images/user.jpg'

export const App = () => {
  return (
    <>
      <Header isLogged={false} logo={logo} userAva={user} userName="User" />
      <main>
        <Outlet />
      </main>
    </>
  )
}
