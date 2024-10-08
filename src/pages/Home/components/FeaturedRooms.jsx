import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const FeaturedRooms = () => {
    const axiosPublic = useAxiosPublic();

    // Fetch rooms data using React Query
    const { data: rooms = [], isLoading, error } = useQuery({
        queryKey: ['featured-rooms'],
        queryFn: async () => {
            try {
                const res = await axiosPublic.get('/rooms');
          
                return res.data;
            } catch (err) {
                console.error('Error fetching rooms:', err);
                throw err;  // Properly handle errors
            }
        }
    });

    // Handle loading and error states
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading rooms</div>;
    }

    return (
        <div className="my-8">
            <h1 className="text-center font-bold text-2xl text-[#f78d79] my-5">Featured Rooms</h1>

            {/* Display information for the first 4 rooms */}
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3">
                {rooms.slice(0, 4).map(room => (
                    <div key={room?._id} className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                        <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: `url(${room?.image})` }}></div>
                        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{room?.room_type}</h3>
                            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                <span className="font-bold text-gray-800 dark:text-gray-200">${room?.price_per_night}</span>
                                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none" disabled>Best price</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Link to={'/rooms'}>
                <button className="btn btn-block bg-[#ad7b9f] mt-3">View all rooms</button>
            </Link>
        </div>
    );
};

export default FeaturedRooms;
