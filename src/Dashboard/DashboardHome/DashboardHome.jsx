import { useContext, useEffect, useState } from "react";
import CreateTask from "../CreateTask/CreateTask";
import TaskFrom from "../TaskForm/TaskFrom";
import ListTask from "../CreateTask/ListTask/ListTask";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";


import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { AuthContext } from "../../AuthProvider/AuthProvider";

const DashboardHome = () => {
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const [tasks, setTasks] = useState([])
    // console.log('tasks',tasks)

    useEffect( () =>{
        const myTask = JSON.parse(localStorage.getItem("tasks") )
        const filterTask = myTask?.filter(task => task.email === user?.email)

        // console.log(filterTask)
        setTasks(filterTask)
        
    } ,[user?.email])
  
    return (

        <DndProvider backend={HTML5Backend}>
             <div className="md:pl-56 mx-auto mb-20 bg-slate-50 ">
            {/* <TaskFrom></TaskFrom> */}
        

            <div className="flex flex-col items-center justify-center pt-4">
                <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
                <ListTask tasks={tasks} setTasks={setTasks} ></ListTask>
            </div>
        </div>
        </DndProvider>
       
    );
};

export default DashboardHome;
  
  
  

