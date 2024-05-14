import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { FirebaseContext } from "../../FirebaseProvider/FirebaseProvider";


// date picker necessary import 
import  { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";


// react toast 

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RoomDetails = () => {

    const [startDate, setStartDate] = useState(new Date());
    const notify = () => toast("room booked successfully");


    const {user}=useContext(FirebaseContext);
    const details = useLoaderData();
    const { room_type, image, description, price_per_night, room_size, availability, special_offers,_id } = details;

    const handleSubmit = async e => {
        e.preventDefault();
        const id = _id;
        const email = user?.email;
        const userName = user?.displayName;
        const date = startDate;
        const type = room_type;
        const price = price_per_night;
        const review = { rating: "", comment: "" }; // Empty review object
    
        const bookingDetails = { id, email, userName, date, type, price, review };
    
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/booking`, bookingDetails);
            console.log(data);
            if (data.insertedId) {
                notify();
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

                <div className="container  flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
                    <h1 className="text-2xl text-blue-500 font-semibold  capitalize lg:text-3xl dark:text-white">
                        {room_type}
                    </h1>

                    <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
                        <img className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96" src={image} alt="" />

                        <div className="mt-8 lg:px-10 lg:mt-0">
                            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                                Price Per Night:{price_per_night}
                            </h1>

                            <h1 className="text-2xl font-semibold text-green-300 dark:text-white lg:w-72">
                                {availability ? 'Available' : 'Booked'}
                            </h1>

                            <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                                {description}
                            </p>

                            <h3 className="mt-6 text-lg font-medium text-blue-500">Room Size:{room_size}</h3>
                            <p className="text-gray-600 dark:text-gray-300"> special offers  : {special_offers?.length > 0 ? special_offers.join(', ') : "there are no special offers for this room"}</p>


                            {/* modal button  */}

                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn btn-block bg-blue-400 mt-5" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Now</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">


                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Price Per Night: $ {price_per_night}</h3>
                                    <p className="py-4">{description}</p>

                                    {/* form */}

                                    <form onSubmit={handleSubmit}>

                                        <label className="input input-bordered flex items-center gap-2">
                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                            
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                            <input type="email" name="email" defaultValue={user ? user.email : ""} className=" pointer-events-none input input-bordered w-full " readOnly />
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                            <input type="text" name="userName" defaultValue={user ? user.displayName : ""} className="pointer-events-none input input-bordered w-full " readOnly />
                                        </label>
                                        
                                        <input type="submit" className="btn btn-block bg-blue-400" name="" id="" value='confirm order' />

                                    </form>

                                    {/* form */}


                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">close modal</button>
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
