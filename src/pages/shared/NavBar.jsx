import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { FirebaseContext } from "../../FirebaseProvider/FirebaseProvider";
import useAdmin from "../../hooks/useAdmin";




const NavBar = () => {



    const { user, logOut } = useContext(FirebaseContext);

    const [adminData] = useAdmin();

    const handleSignOUt = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>

        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/rooms'}>Rooms</NavLink></li>
        <li><NavLink to={'/my-bookings'}>My Bookings</NavLink></li>
        {adminData && <li className="font-bold text-[#f78d79]"><NavLink to={'/dashboard'}>Dashboard</NavLink></li>}

        {/* <li><NavLink to={'/my-list'}>My List</NavLink></li> */}



    </>



    return (
        <div className="mx-auto my-7">
            <div className="navbar  bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">


                            {links}

                        </ul>
                    </div>
                    <h1 className="font-bold text-black text-3xl animate__animated animate__flash"> <span className="text-[#f78d79]">Room</span> <span className="text-[#ad7b9f]">ify</span></h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {links}

                    </ul>
                </div>
                <div className="navbar-end flex gap-3">



                    <div className="w-10 rounded-full">
                        {user ? (
                            <span >
                                <img
                                    className="rounded"
                                    alt="profile image"
                                    src={user.photoURL || adminData?.photo || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webphttps://i.ibb.co.com/wBBTTQm/employee3.jpg"}
                                />
                            </span>
                        ) : (
                            <img
                                className="rounded"
                                alt="existing image"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            />
                        )}
                    </div>



                    {
                        user ?
                            <button onClick={handleSignOUt} className="btn">Sign out </button> :
                            <Link to="/login" className="btn bg-orange-400 text-white">Sign In</Link>
                    }






                    {/* <a href="#" className="btn bg-green-400 text-white">Register</a> */}


                </div>

            </div>
        </div>
    );
};

export default NavBar;