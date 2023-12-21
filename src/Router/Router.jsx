import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import Login from "../Components/Navbar/Login/Login.";
import Register from "../Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";



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
            }
        ]
    }
    
        
    
])

export default router;