import { Link } from "react-router-dom";
import errorImg from "../../assets/download.png"


const ErrorPage = () => {
    return (
        <div className=" h-screen flex flex-col justify-center items-center bg-black">
          
            
          <div className="text-center">
           <img className="mx-auto " src={errorImg} alt="" />
            <Link className="btn btn-outline btn-primary" to={'/'}>go back to Home</Link>
          </div>


        </div>
    );
};

export default ErrorPage;