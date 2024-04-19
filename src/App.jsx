import { createBrowserRouter , RouterProvider } from "react-router-dom"

import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact"
import MainLayout from "../Layout/MainLayuot"


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          index: true,
          element:<Home/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/contact",
          element: <Contact/>
        }
      ]
    }
  ])

  return (
    <div className="container">
      <RouterProvider router={routes} />
    </div>
  )
  
}
export default App
