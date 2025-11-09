import { createBrowserRouter } from "react-router";
import MainLayout from '../layouts/MainLayout'
import Home from "../pages/homes/Home";


const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home                 
            },
            {
                path: '/home',
                Component : Home 
            },
            {
                
            }
        ]
    }
])

export default router;