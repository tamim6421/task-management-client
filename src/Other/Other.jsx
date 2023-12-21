import { useQuery } from "@tanstack/react-query";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";



const axiosPublic = useAxiosPublic();
const { user } = useContext(AuthContext);
const [allTask, setAllTask] = useState([])
const { data: myTask, isLoading } = useQuery({
  queryKey: ['allSlot'],
  queryFn: async () => {
    const res = await axiosPublic.get(`/getTask/${user?.email}`);
    return res.data;
  },
});
useEffect( () =>{
    setAllTask(myTask)
} ,[myTask])

console.log(allTask)

const handleDragEnd = (results) =>{
    if(!results.destination) return
    let tempTask = [...allTask]
    let [selectedRow] = tempTask.splice(results.source.index, 1)
    tempTask.splice(results.destination.index, 0, selectedRow)
    setAllTask(tempTask)
    console.log(results, selectedRow)
}

if (isLoading) {
  return <h1>Loading ........</h1>;
}



<DragDropContext onDragEnd={(results) => handleDragEnd(results)}>
        <div className="md:px-56 mt-20">
          This is dashboard home
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div>
              <h1 className="text-2xl font-bold text-orange-500 drop-shadow-lg">
                TO DO
              </h1>
              <Droppable droppableId={myTask[0]}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {allTask?.map((task, idx) => (
                      <Draggable
                        key={ idx}
                        draggableId={task?.title}
                        index={idx}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-gray-200 mb-5 rounded-lg"
                          >
                            <h1 className="text-lg font-bold">
                              <span>Title : </span> {task?.title}{' '}
                            </h1>
                            <h1>
                              Priority: <span>{task?.priority}</span>{' '}
                            </h1>
                            <p> des: {task?.description} </p>
                            <div>
                              <h1>Deadline : {task?.deadline}</h1>
                            </div>
                            <div>
                              <button className="btn">edit</button>
                              <button className="btn">delete</button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
  
              <div>
                <Link to="/dashboard/taskForm">
                  <button className="btn">
                    <IoMdAddCircle className="text-2xl" />
                    Add Task
                  </button>
                </Link>
              </div>
            </div>
  
            {/* column 2  */}
            <div className="bg-gray-200">
              <h1>Column 2</h1>
              <Droppable droppableId="column-2" type="TASK">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {/* ... */}
                  </div>
                )}
              </Droppable>
            </div>
  
            {/* column 3  */}
            <div className="bg-gray-200">
              <h3>column 3</h3>
              <Droppable droppableId="column-3" type="TASK">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {/* ... */}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        </div>
      </DragDropContext>