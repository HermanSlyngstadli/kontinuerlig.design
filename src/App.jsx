import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage/LandingPage'
import { WhatIsIt } from './pages/WhatIsIt/WhatIsIt'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <LandingPage />,
        },
        {
            path: '/hva-er-kontinuerlig-design',
            element: <WhatIsIt />,
        },
    ])
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
