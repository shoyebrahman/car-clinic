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
 <div className='max-w-7xl mx-auto pt-3 pr-12 pl-12'>

   <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
 </div>
)
   