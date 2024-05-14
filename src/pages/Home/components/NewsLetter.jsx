import { Link } from "react-router-dom";

const NewsLetter = () => {
    return (
        <div className="my-5">
            <header className="bg-white dark:bg-gray-900">
                <nav className="">
                    <div className="container flex items-center justify-between px-6 py-3 mx-auto">

                    </div>
                </nav>

                <div className="container px-6 py-16 mx-auto">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Sign To The <span className="text-blue-500">Newsletter</span></h1>

                                <p className="mt-3 text-gray-600 dark:text-gray-400">be the first to knows when  our <span className="font-medium text-2xl text-blue-500">Update ,Special offers & Deals </span> are live</p>

                                <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">


                                    <Link to={'/login'}>
                                        <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                            Sign IN
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img className="w-full h-full max-w-md" src="https://merakiui.com/images/components/Email-campaign-bro.svg" alt="email illustration vector art" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default NewsLetter;
