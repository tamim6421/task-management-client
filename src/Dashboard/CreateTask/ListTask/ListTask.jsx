/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";


const ListTask = ({tasks, setTasks}) => {
    const [todos, setTodos] = useState([])
    const [ongoing,setOngoing] = useState([])
    const [completed, setCompleted] = useState([])


    useEffect( () =>{

        const filterTodo = tasks.filter(task => task.status == 'todo')
        const filterOngoing = tasks.filter(task => task.status == 'ongoing')
        const filterComplete = tasks.filter(task => task.status == 'complete')
        setTodos(filterTodo)
        setOngoing(filterOngoing)
        setCompleted(filterComplete)

    } ,[tasks])

    const statuses = ['todo', 'ongoing', 'complete']



    return (
        <div>
            <h1>List</h1>
            <div className="flex gap-20 flex-col md:flex-row">
                {
                    statuses.map( (status, index) => <Section key={index} status={status} tasks ={tasks} setTasks = {setTasks} todos = {todos} ongoing = {ongoing} completed = {completed}>

                    </Section> )
                }
            </div>
        </div>
    );
};

export default ListTask;

const Section = ({status, tasks, setTasks, todos, ongoing, completed}) =>{

    let text = "Todo"
    let bg = "bg-orange-400"
    let tasksToMap = todos

    if(status == 'ongoing'){
        text = " Ongoing"
        bg = 'bg-blue-500'
        tasksToMap = ongoing
    }
    if(status == 'complete'){
        text = " Complete"
        bg = 'bg-green-500'
        tasksToMap = completed
    }

    return <>
        <div className={`w-64`}>
           <Header text = {text} bg = {bg} count={tasksToMap.length}></Header> 
           {
            tasksToMap.length > 0 && tasksToMap.map( (task, index) => <Task key={index} index={index} task={task} tasks={tasks} setTasks = {setTasks} ></Task> )
           }
        </div>
    </>
}

const Header = ({text, bg, count}) =>{
    return (
        <div>
           <div className={` ${bg} flex items-center  h-10 uppercase rounded-md font-semibold text-white px-3`} >{text}  <div className="ml-5 bg-red-500 w-5 h-5 text-white text-center font-semibold rounded-full flex items-center justify-center">{count}</div> </div>
        </div>
    )
 
}

const Task = ({task, tasks, setTasks}) =>{

    const handelRemove = (dead) =>{
        console.log(dead)
        const filterTask = tasks.filter(task => task.deadline !== dead)
        setTasks(filterTask)
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Task Delete Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
    }
    return (
        <div className={`p-3 mt-8 shadow-md bg-slate-200 rounded-md text-center  cursor-grab`}>
          <p className="text-gray-500 font-bold text-xl">{task.title}</p>
          <div className="flex items-center gap-2 justify-center">
            <p>Priority: </p>
            <p className="badge bg-green-500 text-white" >{task.priority}</p>
          </div>
          <div>
            <p>Description : <span>{task.description}</span> </p>
          </div>
            <p>DeadLine : <span>{task.deadline}</span></p>

          <div>
          <button
          onClick={() => handelRemove(task.deadline)}
          className="btn btn-sm mt-3" >
          
            <MdDelete className="text-2xl text-red-500 "></MdDelete>
            </button>
          </div>
        </div>
    )
 
}