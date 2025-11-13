import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/homes/Home";
import AllProperties from "../pages/AllProperties";
import AddProperty from "../pages/AddProperty";
import MyProperties from "../pages/MyProperties";
import MyRating from "../pages/MyRating";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import UpdateProperty from "../components/UpdateProperty";
import PropertyDetails from "../pages/PropertyDetails";
import PrivateRoute from "./PrivateRoute";
import Loader from "../components/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: <Loader></Loader>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/properties",
        Component: AllProperties,
      },
      {
        path: "/property-details/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails></PropertyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://real-state-homenest.vercel.app/properties/${params.id}`
          ),
      },
      {
        path: "/add-property",
        element: (
          <PrivateRoute>
            <AddProperty></AddProperty>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-properties",
        element: (
          <PrivateRoute>
            <MyProperties></MyProperties>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-ratings",
        element: (
          <PrivateRoute>
            <MyRating></MyRating>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/update-property/:id",
        element: (
          <PrivateRoute>
            <UpdateProperty></UpdateProperty>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://real-state-homenest.vercel.app/properties/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
