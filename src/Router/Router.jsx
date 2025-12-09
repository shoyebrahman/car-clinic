import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import { Login } from "../pages/Login/Login";
import { Signup } from "../pages/Signup/Signup";
import { Checkout } from "../pages/Checkout/Checkout";
import { Bookings } from "../pages/Bookings/Bookings";
import { PrivateRoutes } from "./PrivateRoutes";
import { About } from "../pages/Home/About/About";
import { Details } from "../pages/Details/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      }, 
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "checkout/:id",
        element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
        loader: ({params}) => fetch(`https://car-clinic-server-mu.vercel.app/services/${params.id}`)
      },
      {
        path: "/details/:id",
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader: ({params}) => fetch(`https://car-clinic-server-mu.vercel.app/services/${params.id}`)
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/bookings",
        element: <PrivateRoutes> <Bookings></Bookings> </PrivateRoutes>
      }
    ]
  },
]);