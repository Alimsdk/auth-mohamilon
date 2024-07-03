import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Register from './components/Register/Register.jsx'
import Login from './components/Login/Login.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import Orders from './components/Orders/Orders.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import Profile from './components/Profile/Profile.jsx'

const router= createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      { path:'/',
       element:<Home/>
      },
       {
          path:'/register',
          element:<Register/>
       },
       {
        path:'/login',
        element: <Login/>
       },
       {
        path:'/orders',
        element: <PrivateRoute><Orders/></PrivateRoute>
       },
       {
        path:'/profile',
        element: <PrivateRoute><Profile/></PrivateRoute>
       }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
)
