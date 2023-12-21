import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <Navbar></Navbar>

            <Outlet></Outlet>

        </div>
    );
};

export default MainLayout;