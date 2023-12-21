import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <Navbar></Navbar>

            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />

        </div>
    );
};

export default MainLayout;