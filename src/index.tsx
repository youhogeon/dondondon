import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import './index.css'
import MainTheme from './theme/MainTheme'

const root = document.getElementById('root') as HTMLElement

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainTheme />,
    children: [
      {
        path: '',
        element: <div>Home</div>
      },
      {
        path: 'test',
        element: <div>Test</div>
      }
    ]
  },
])

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)