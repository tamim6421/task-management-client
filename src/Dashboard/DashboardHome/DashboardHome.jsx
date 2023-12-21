import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const DashboardHome = () => {
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
