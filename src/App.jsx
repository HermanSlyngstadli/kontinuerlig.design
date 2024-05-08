import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage/LandingPage'
import { Questioneer } from './pages/Questioneer/Questioneer'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <LandingPage />,
        },
        {
            path: '/undersokelsen',
            element: <Questioneer />,
        },
    ])
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
