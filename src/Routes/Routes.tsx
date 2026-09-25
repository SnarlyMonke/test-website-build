import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import ExpertisePage from "../Pages/ExpertisePage/ExpertisePage";
import ClientsPage from "../Pages/ClientsPage/ClientsPage";
import ContactPage from "../Pages/ContactPage/ContactPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "", index: true, element: <HomePage/>},
            {path: "about", element: <AboutPage/>},
            {path: "expertise", element: <ExpertisePage/>},
            {path: "clients", element: <ClientsPage/>},
            {path: "contact", element: <ContactPage/>},

            {path: "*", element: <Navigate to="/" replace />} //catches any invalid routes
        ]
    }
]);