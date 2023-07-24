import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'

import { route } from './app/router'
import { store } from './app/store'

import './index.css'


const root = document.getElementById('root') as HTMLElement

const router = createBrowserRouter(route)

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
)