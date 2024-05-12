import MapComponent from "./components/MapComponent";
import Video from "./components/Video";


const Home = () => {
    return (
        <div>
            <h1>this is home </h1>
            <div >
            
            <Video></Video>

            <h1>map component here </h1>
            <MapComponent></MapComponent>
            </div>
        </div>
    );
};

export default Home;