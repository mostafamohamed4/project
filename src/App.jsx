import { useState } from 'react';
import './App.css';
import { createBrowserRouter, createHashRouter, RouterProvider, useNavigate } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Carts from './Components/Carts/Carts';
import Shopping from './Components/Shopping/Shopping';
import { CartContextProvider } from './Context/Carts';

function App() {
  let routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [

        { index:true, element: < Shopping /> },

      ]
    }


  ])

  return <>
    <CartContextProvider>
      <RouterProvider router={routers}></RouterProvider>
    </CartContextProvider>
  </>

}

export default App;
