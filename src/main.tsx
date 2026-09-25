import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./styles/colours.css"; //website colours
import "./styles/fonts.css"; //website fonts
import './index.css'

// import App from './App.tsx' //no longer needed

import { router } from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/* <App /> */}
        <RouterProvider router={router}/>
    </StrictMode>,
)
