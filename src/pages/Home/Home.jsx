

import { Helmet } from "react-helmet";
import FeaturedRooms from "./components/FeaturedRooms";
import MapComponent from "./components/MapComponent";
import NewsLetter from "./components/NewsLetter";
import Video from "./components/Video";

// for aos 
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Offers from "./components/Offers";
import UserReviews from "./components/UserReviews";






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
            
            <div>
                <div data-aos="fade-up-right"><Video></Video></div>
                <div data-aos="fade-up-left"><NewsLetter></NewsLetter></div>
                <div data-aos="fade-up-left"><FeaturedRooms></FeaturedRooms></div>
                <div data-aos="fade-up-right"><Offers></Offers></div>
                <div data-aos="fade-up-left"><UserReviews></UserReviews></div>
                <h1 className="text-center font-bold text-2xl my-3">Our location</h1>
                <div className="my-5" data-aos="fade-up-right"><MapComponent></MapComponent></div>
            </div>
        </div>
    );
};

export default Home;
