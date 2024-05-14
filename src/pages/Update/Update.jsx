import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FirebaseContext } from "../../FirebaseProvider/FirebaseProvider";

// imports for date picker

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";


const Update = () => {

    const [startDate, setStartDate] = useState(new Date())


    const { user } = useContext(FirebaseContext);

    const booking = useLoaderData();
    const { _id, type } = booking;
    console.log(_id)


    // update operation

    const handleUpdate = async e => {
        e.preventDefault();
        const form = e.target;
        const date = startDate;
        const rating = form.select.value; // Get rating from select input
        const comment = form.text.value; // Get comment from text input

        const updateDetails = { date, review: { rating, comment } };
        console.table(updateDetails);

        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/bookings/${_id}`, updateDetails); // Include booking ID in the URL
            console.log(data);
            // Handle success
        } catch (err) {
            console.error(err);
            // Handle error
        }
    };


    return (
        <div>
        
            <form onSubmit={ handleUpdate}>
                <p>room type:{type}</p>
                <label className="input input-bordered flex items-center gap-2">
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

                </label>

                <label className="input input-bordered flex items-center gap-2">
                    <select name="select" className="select select-info w-full max-w-xs" defaultValue="" >
                        <option value="" disabled>give rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>


                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="text" name="text" placeholder="add comment " className=" pointer-events-none input input-bordered w-full " />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="email" name="email" defaultValue={user?.email} className=" pointer-events-none input input-bordered w-full " readOnly />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input type="text" name="userName" defaultValue={user?.displayName} className="pointer-events-none input input-bordered w-full " readOnly />
                </label>

                <input type="submit" className="btn btn-block bg-blue-400" name="" id="" value='confirm order' />

            </form>
        </div>
    );
};

export default Update;