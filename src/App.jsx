import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {Error,Home,Pokmon} from "./components/index"

const router = createBrowserRouter([
    {
      path:"/pokemon/:id",
      element: <Pokmon/>,
      errorElement:<Error/>
    },
    {
      path:"/",
      element:<Home/>,
      errorElement:<Error/>
    },
    
  ])
  

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App