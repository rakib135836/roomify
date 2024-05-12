import { useLoaderData } from "react-router-dom";


const RoomDetails = () => {

    const details=useLoaderData();
    const {room_type}=details;

    return (
        <div>
            <h1>room type :{room_type}</h1>
        </div>
    );
};

export default RoomDetails;