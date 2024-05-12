import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {
    const details = useLoaderData();
    const { room_type, image, description, price_per_night, room_size, availability, special_offers } = details;

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
                            <button className="btn btn-block bg-blue-400 mt-5">Book Now</button>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default RoomDetails;
