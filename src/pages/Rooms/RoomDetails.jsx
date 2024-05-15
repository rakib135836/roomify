import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../FirebaseProvider/FirebaseProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RoomDetails = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [reviews, setReviews] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [isAvailable, setIsAvailable] = useState(true);
    const navigate = useNavigate();
    const { user } = useContext(FirebaseContext);
    const details = useLoaderData();
    const { room_type, image, description, price_per_night, room_size, availability, special_offers, _id } = details;

    const notify = () => toast("Room booked successfully");

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/review-room/${_id}`);
                setReviews(response.data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        const fetchBookings = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/bookings`);
                setBookings(response.data);

                const roomBookings = response.data.filter(booking => booking.id === _id);
                setIsAvailable(roomBookings.length === 0);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        };

        fetchReviews();
        fetchBookings();
    }, [_id]);

    const handleSubmit = async e => {
        e.preventDefault();
        if (!user) {
            navigate("/login");
            return;
        }

        const bookingDetails = {
            id: _id,
            email: user.email,
            userName: user.displayName,
            date: startDate,
            type: room_type,
            price: price_per_night,
            review: { rating: "", comment: "" }
        };

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/booking`, bookingDetails);
            if (data.insertedId) {
                notify();
                setIsAvailable(false);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="relative flex">
                <div className="min-h-screen lg:w-1/3"></div>
                <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>
                <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
                    <h1 className="text-2xl text-blue-500 font-semibold capitalize lg:text-3xl dark:text-white">
                        {room_type}
                    </h1>
                    <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
                        <img className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96" src={image} alt="" />
                        <div className="mt-8 lg:px-10 lg:mt-0">
                            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                                Price Per Night: {price_per_night}
                            </h1>
                            <h1 className="text-2xl font-semibold text-green-300 dark:text-white lg:w-72">
                                {isAvailable ? 'Available' : 'Booked'}
                            </h1>
                            <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                                {description}
                            </p>
                            <h3 className="mt-6 text-lg font-medium text-blue-500">Room Size: {room_size}</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Special offers: {special_offers?.length > 0 ? special_offers.join(', ') : "There are no special offers for this room"}
                            </p>
                            <br />
                            <p>Review: {reviews?.length > 0 ? reviews[0].review.comment : "No reviews yet"}</p>
                            <p>Ratings: {reviews?.length > 0 ? reviews[0].review.rating : "No rating yet"}</p>

                            {/* Book Now button */}
                            <button
                                className="btn btn-block bg-blue-400 mt-5"
                                onClick={() => user ? document.getElementById('my_modal_5').showModal() : navigate("/login")}
                                disabled={!isAvailable || !user}
                            >
                                Book Now
                            </button>

                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Price Per Night: $ {price_per_night}</h3>
                                    <p className="py-4">{description}</p>
                                    {/* Form */}
                                    <form onSubmit={handleSubmit}>
                                        <label className="input input-bordered flex items-center gap-2">
                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2">
                                            <input type="email" name="email" defaultValue={user ? user.email : ""} className="pointer-events-none input input-bordered w-full" readOnly />
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2">
                                            <input type="text" name="userName" defaultValue={user ? user.displayName : ""} className="pointer-events-none input input-bordered w-full" readOnly />
                                        </label>
                                        <input type="submit" className="btn btn-block bg-blue-400" value="Confirm Order" />
                                    </form>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button className="btn">Close Modal</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default RoomDetails;
