import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './Home/Home.jsx';
import Pbanner from './Product/Pbanner.jsx';
import Error from './Error.jsx';
import Product from './Product/Product.jsx';
import Hdetails from './Home/Hdetails.jsx';
import Rlayout from './Register/Rlayout.jsx';
import Llayout from './Login.jsx/Llayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/cart",
        element:<Product></Product>,
      },
      {
        path:"/home/:id",
        element:<Hdetails></Hdetails>,
        loader:()=> fetch('alldata.json')
      },
      {
        path:"/register",
        element:<Rlayout></Rlayout>
      },
      {
        path:'/login',
        element:<Llayout></Llayout>

      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
