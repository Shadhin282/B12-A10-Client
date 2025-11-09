import { createBrowserRouter } from "react-router";
import MainLayout from '../layouts/MainLayout'
import Home from "../pages/homes/Home";
import AllProperties from "../pages/AllProperties";
import AddProperty from "../pages/AddProperty";
import MyProperties from "../pages/MyProperties";
import MyRating from "../pages/MyRating";
import NotFound from "../pages/NotFound";


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
                path: '/properties',
                Component: AllProperties,
            },
            {
                path: '/add-property',
                Component: AddProperty
            },
            {
                path: '/my-properties',
                Component: MyProperties
            },
            {
                path: '/my-ratings',
                Component: MyRating
            }
        ]
        
    },
    {
        path: '*',
        Component: NotFound
    }
])

export default router;