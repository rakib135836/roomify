import { Link } from "react-router-dom";
import errorImg from "../../assets/download.png"
import { Helmet } from "react-helmet";


const ErrorPage = () => {
  return (

    <div className=" h-screen flex flex-col justify-center items-center bg-black">
      <Helmet>
        <title>roomify | error</title>
      </Helmet>

      <div className="text-center">
        <img className="mx-auto " src={errorImg} alt="" />
        <Link className="btn btn-outline btn-primary" to={'/'}>go back to Home</Link>
      </div>


    </div>
  );
};

export default ErrorPage;