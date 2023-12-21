import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import Login from "../Components/Navbar/Login/Login.";
import Register from "../Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";
import TaskFrom from "../Dashboard/TaskForm/TaskFrom";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>,
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
               path:'',
               element: <DashboardHome></DashboardHome>
            },
            {
                path: 'taskForm',
                element: <TaskFrom></TaskFrom>
            }
        ]
    }
    
        
    
])

export default router;