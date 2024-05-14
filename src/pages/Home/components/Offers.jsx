

const Offers = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-6xl px-6 py-10 mx-auto">


                    <h1 className=" mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                        special offers
                    </h1>

                    <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                        <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>

                        <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                            <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src='https://i.ibb.co/r5cwbYs/krakenimages-8-RXmc8p-LX-I-unsplash.jpg' alt="client photo" />

                            <div className="mt-2 md:mx-6">
                                <div>
                                    <p className="text-xl font-medium tracking-tight text-white">Want to know a secret!</p>

                                </div>

                                <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">To know our special offers .</p>




                                {/* modal button  */}

                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>click here </button>
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4 text-2xl text-blue-500">Loyalty Rewards: Join our loyalty program and earn points with every booking. Redeem your points for free nights, room upgrades, and other fantastic rewards.</p>
                                    </div>
                                </dialog>


                            </div>
                        </div>
                    </main>
                </div>
            </section>
        </div>
    );
};

export default Offers;