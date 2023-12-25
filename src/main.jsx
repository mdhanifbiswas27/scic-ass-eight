import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import LogIngForms from './Pages/Forms/LogingForms';
import RegisterForms from './Pages/Forms/RegisterForms';
import AuthProvider from './Provider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard';
import TaskList from './Pages/Dashboard/TaskList';
import AddTask from './Pages/Dashboard/AddTask';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/logIn",
        element: <LogIngForms></LogIngForms>
      },
      {
        path: '/register',
        element: <RegisterForms></RegisterForms>
      },
      
    ]
  },
  {
    path:"/dashboard",
    element: <Dashboard></Dashboard>,
    children:[
      {
        path:'/dashboard',
        element: <TaskList></TaskList>
      },
      {
        path:'/dashboard/addTask',
        element: <AddTask></AddTask>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>


  </React.StrictMode>,
)
