import {createBrowserRouter,
  RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Update from './pages/Update'
import Register from './pages/Register'
import Login from './pages/Login'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path:"/update",
      element:<Update/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/register",
      element:<Register/>
    }
  ]);
function App() {
  return <RouterProvider router={router} />
}

export default App;
