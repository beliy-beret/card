import { createBrowserRouter } from 'react-router-dom'

import { App } from './App'

import { Auth } from 'features/auth/Auth'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [],
  },
  {
    path: 'auth',
    Component: Auth,
    children: [],
  },
])
