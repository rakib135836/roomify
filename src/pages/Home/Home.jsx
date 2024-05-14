

import { Helmet } from "react-helmet";
import FeaturedRooms from "./components/FeaturedRooms";
import MapComponent from "./components/MapComponent";
import NewsLetter from "./components/NewsLetter";
import Video from "./components/Video";

// for aos 
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";






const Home = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
        Aos.refresh();
    }, []);



    return (
        <div>

            <Helmet>
                <title>roomify | home</title>
            </Helmet>
            <h1>this is home </h1>
            <div>
                <div data-aos="fade-up-right"><Video></Video></div>
                <div data-aos="fade-up-left"><NewsLetter></NewsLetter></div>

                <div data-aos="fade-up-right"><MapComponent></MapComponent></div>
                <div data-aos="fade-up-left"><FeaturedRooms></FeaturedRooms></div>
            </div>
        </div>
    );
};

export default Home;
