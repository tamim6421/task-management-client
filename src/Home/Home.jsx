import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import OurUsers from "./OurUsers/OurUsers";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    task.io | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <OurUsers></OurUsers>
        </div>
    );
};

export default Home;