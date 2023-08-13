import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import 'common/styles/index.scss'

import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Root } from 'pages/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
])

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
