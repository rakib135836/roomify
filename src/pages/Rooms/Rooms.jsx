import { useLoaderData } from "react-router-dom";
import RoomCard from "./RoomCard";
import { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";


const Rooms = () => {

    const [rooms, setRooms] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const availableRooms = useLoaderData();


    const handleFilter = async () => {

        console.log('Min Price:', minPrice);
        console.log('Max Price:', maxPrice);

        const response = await axios.get(`${import.meta.env.VITE_API_URL}/room`, {
            params: {
                minPrice: parseInt(minPrice),
                maxPrice: parseInt(maxPrice)
            }
        });
        // Update rooms state with filtered data
        setRooms(response.data);

    };


    return (
        <div>

            <Helmet>
                <title>roomify | rooms</title>
            </Helmet>
            <h1 className="capitalize font-bold text-3xl text-center my-5">rooms</h1>

            <div className="flex justify-center items-center gap-3">

                <h1>filter by price:</h1>
                <div className="flex justify-center space-x-4 my-5">
                    <input
                        type="number"
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        aria-label="Minimum Price" // Add aria-label attribute
                        className="border border-gray-400 px-2 py-1 rounded"
                    />
                    <input
                        type="number"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        aria-label="Maximum Price" // Add aria-label attribute
                        className="border border-gray-400 px-2 py-1 rounded"
                    />
                    <button onClick={(e) => handleFilter(e)} className="bg-blue-500 text-white px-4 py-2 rounded">Filter</button>
                </div>


            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {rooms.length > 0 ?
                    rooms.map(room => <RoomCard key={room._id} room={room} />) :
                    availableRooms.map(room => <RoomCard key={room._id} room={room} />)
                }
            </div>
        </div>
    );
};

export default Rooms;