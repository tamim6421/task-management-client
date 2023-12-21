import { useQuery } from "@tanstack/react-query";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const DashboardHome = () => {
const axiosPublic = useAxiosPublic()
const {user} = useContext(AuthContext)
    const {data: myTask} = useQuery({
        queryKey: ['allSlot'],
        queryFn : async () =>{
            const res = await axiosPublic.get(`/getTask/${user?.email}`)
            return res.data
        }
    })
    console.log(myTask)


  return (
    <div className="md:px-56 mt-20">
      this is dashboard home
      <div>
        <h1 className="text-2xl font-bold text-orange-500 drop-shadow-lg">
          TO DO
        </h1>

        <div>
         <Link to= '/dashboard/taskForm'>
         <button className="btn">
          <IoMdAddCircle className="text-2xl" />
            Add Task
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
