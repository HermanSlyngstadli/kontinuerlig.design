import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Frontpage } from './Frontpage'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Frontpage />,
        },
    ])
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
