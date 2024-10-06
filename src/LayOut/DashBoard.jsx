import { FaHome, FaList} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";




const Dashboard = () => {


    const { logOut } = useAuth();
    const [adminData]=useAdmin();
 


    return (
        <div className="flex flex-col lg:flex-row">
            {/* dashboard side bar */}
            <div className="w-full lg:w-64 min-h-screen bg-custom-image">
                <ul className="menu p-4">
                    {
                        adminData ? 
                        <>
                            <li>
                            <h1 className="font-bold text-black text-3xl animate__animated animate__flash"> <span className="text-[#f78d79]">Room</span> <span className="text-[#ad7b9f]">ify</span></h1>
                            </li>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                         
                            <li>
                                <NavLink to="/dashboard/addRoom">
                                    <FaList></FaList>
                                    Add A Room</NavLink>
                            </li>
                        
                            <li>
                                <NavLink to="/dashboard/adminProfile">
                                    <CgProfile />
                                    profile</NavLink>
                            </li>
                            <li>
                                <div className="flex justify-between">
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                                            <img src={adminData.photo} className="w-full h-full object-cover" alt="Avatar" />
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-white">{adminData.name}</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button onClick={logOut} className="btn btn-outline ">LogOut</button>
                            </li>
                        </>
                          :
                          <div>
                            <h1 className="text-4xl text-center font-bold">be  admin first </h1>
                          </div>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>

                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8 bg-blue-50">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;