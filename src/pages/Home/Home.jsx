

import { Helmet } from "react-helmet";
import FeaturedRooms from "./components/FeaturedRooms";
import MapComponent from "./components/MapComponent";
import NewsLetter from "./components/NewsLetter";
import Video from "./components/Video";



const Home = () => {
 
    

   

    return (
        <div>

            <Helmet>
                <title>roomify | home</title>
            </Helmet>
            <h1>this is home </h1>
            <div>
                <Video></Video>
                <NewsLetter></NewsLetter>
                <h1> </h1>
                <MapComponent></MapComponent>
                <FeaturedRooms></FeaturedRooms>
            </div>
        </div>
    );
};

export default Home;
