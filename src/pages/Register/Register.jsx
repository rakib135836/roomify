
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../FirebaseProvider/FirebaseProvider';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEyeSlash, FaEye } from 'react-icons/fa6';




const Register = () => {

    const notify = () => toast("Registration successful");


    const [showPassword, setShowPassword] = useState(false);
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');
    const { createUser } = useContext(FirebaseContext);


    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const Photo = form.get('Photo');
        const Name = form.get('Name')
        console.log(email, password, Photo, Name)

        if (password.length < 6) {
            setRegisterError('password should be at least 6 characters or longer');
            return
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            setRegisterError('your password must have a lowercase and a uppercase letter');
            return
        }

        // reset error
        setRegisterError('');
        setRegisterSuccess('');

        // Create user 
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setRegisterSuccess('Register successfull');
                notify('Registration successful')


            })
            .catch(error => {

                console.error(error);
                setRegisterError(error.message)
            });
    };

    return (
        <div>
          
           

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="Name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" name="Photo" placeholder="Photo url" className="input input-bordered" required />
                            </div>
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
                                <input type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />

                                <span onClick={() => setShowPassword(!showPassword)}>

                                    {
                                        showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                    }

                                </span>

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        {
                            registerError && <p className='text-red-400'> {registerError}</p>
                        }
                        {
                            registerSuccess && <p className='text-green-400'>{registerSuccess}</p>
                        }
                    </div>
                    <p>Already have an account? Please <Link className="text-red-400" to={'/login'}>Login</Link></p>
                    <ToastContainer />

                </div>
            </div>
        </div>
    );
};

export default Register;
