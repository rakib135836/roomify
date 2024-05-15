import axios from "axios";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const UserReviews = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/bookings`);
                setBookings(data);
            } catch (error) {
                console.error("Error fetching bookings:", error);
                setError("Failed to fetch bookings.");
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!bookings.length) {
        return <div>No bookings available.</div>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-center">User Reviews</h1>
           <div>
           <Carousel showThumbs={false}>
                {bookings.map(booking => (
                    <div key={booking._id} style={{ height: '300px' }}>
                        <div className="legend h-1/2">
                            <h3>{booking?.userName}</h3>
                            <h1 className="text-2xl text-blue-500"> {booking?.type}</h1>
                            <p>{booking?.review.comment}</p>
                            <p className="text-red-400">Rating: {booking?.review.rating}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
           </div>
        </div>
    );
};

export default UserReviews;
