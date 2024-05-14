
import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../FirebaseProvider/FirebaseProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { Helmet } from "react-helmet";






const Login = () => {



    const [loginError, setLoginError] = useState('');

    const { signIn, googleSignIn } = useContext(FirebaseContext);







    const handleGoogleSignIn = () => {

        const provider = new GoogleAuthProvider();
        googleSignIn(provider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

            })
            .catch(error => {
                console.error('error hoiche', error);


            })
    }





    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page ', location);


    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password)


        // reset error

        setLoginError('');

        signIn(email, password)
            .then(result => {
                console.log(result.user)

                // nevigate after login 

                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                setLoginError('invalid email or password');
            })
    }


    return (


        <div>

            <Helmet>
                <title>roomify | login</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">


                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


                        <form onSubmit={handleLogin} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>


                    </div>


                    <div>


                        <button onClick={handleGoogleSignIn} className="btn">
                            <FaGoogle />
                            login with google
                        </button>



                        {
                            loginError && <p className="text-red-500"> {loginError}</p>
                        }

                    </div>


                    <p>Dont have an account? Please <Link className="text-red-300" to={"/register"}> Register</Link></p>
                </div>


            </div>
        </div>
    );
};

export default Login;

