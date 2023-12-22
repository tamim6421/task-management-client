/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Spinner from "../Components/Spinner/Spinner";


const PrivetRoute = ({children}) => {
    
        const {user, loading} = useContext(AuthContext)
        
        const location = useLocation()
    
        if(loading){
            return <Spinner></Spinner>
        }
    
        if(user){
            return children
        }
    
        return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default PrivetRoute;