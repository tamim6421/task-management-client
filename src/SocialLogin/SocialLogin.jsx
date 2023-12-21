import { useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosPublic from "../hook/useAxiosPublic";



const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const handleSocialLogin = (social) =>{
        social()
        .then( res =>{
            console.log(res.user)

            const userInfo = {
                email: res.user?.email,
                name: res.user?.displayName,
                role: 'member'
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data)
                navigate('/')
            })
        })
    }
    return (
        <div>
              <div className="divider text-green-500 ">Or, Continue With</div>
          <button
            type="button"
            onClick= { ()=>handleSocialLogin(googleLogin)}
            className="btn btn-outline btn-success w-full hover:text-white flex justify-between items-center cursor-pointer "
          >
            Google
            <FcGoogle className="w-8 h-8" />
          </button>
        </div>
    );
};

export default SocialLogin;