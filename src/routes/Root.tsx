import logo from '../assets/images/Logo.png'
import user from '../assets/images/user.jpg'
import { Header } from '../components/header'

export const Root = () => {
  return (
    <>
      <Header isLogged={false} logo={logo} userAva={user} userName="User" />
    </>
  )
}
