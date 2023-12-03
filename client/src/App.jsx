import {createBrowserRouter,
  Outlet,
  RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Update from './pages/Update'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Add from './pages/Add'

const Layout = () =>{
  return <>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </>
}

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:"/update/:id",
          element:<Update/>
        },
        {
          path:'/post/:id',
          element:<Add/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }

      ]
    },
    
  ]);
function App() {
  return (
    <div className="m-0 box-border">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  )
  
}

export default App;
