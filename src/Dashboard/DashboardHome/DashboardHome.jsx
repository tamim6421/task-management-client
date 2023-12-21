import { useEffect, useState } from "react";
import CreateTask from "../CreateTask/CreateTask";
import TaskFrom from "../TaskForm/TaskFrom";
import ListTask from "../CreateTask/ListTask/ListTask";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";


const DashboardHome = () => {
    const axiosPublic = useAxiosPublic()
    const [tasks, setTasks] = useState([])
    console.log('tasks',tasks)

    useEffect( () =>{
        setTasks(JSON.parse(localStorage.getItem("tasks") ))
        
    } ,[])
  
    return (
        <div className="px-56 bg-slate-100   mt-10">
            {/* <TaskFrom></TaskFrom> */}
            <h1>dashbord home</h1>

            <div className="flex flex-col items-center justify-center pt-4">
                <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
                <ListTask tasks={tasks} setTasks={setTasks} ></ListTask>
            </div>
        </div>
    );
};

export default DashboardHome;
  
  
  

