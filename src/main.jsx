import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//import Root from "./routes/root";
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Router';
import { Authprovider } from './provider/Authprovider';

createRoot(document.getElementById('root')).render(
 <div className='lg:max-w-7xl mx-auto lg:pt-3 lg:pr-12 lg:pl-12'>

   <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
 </div>
)
   