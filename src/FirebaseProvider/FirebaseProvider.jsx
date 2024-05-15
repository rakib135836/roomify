import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';
import axios from "axios";

const auth = getAuth(app);

export const FirebaseContext = createContext(null);

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
     const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);

     }
     const googleSignIn=(provider)=>{
        return signInWithPopup(auth,provider);
     }

     const githubSignIn=(githubProvider)=>{
        return signInWithPopup(auth,githubProvider);
     }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
            // if user exists then issue a token
            if (currentUser) {
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }
            else {
                axios.post(`${import.meta.env.VITE_API_URL}/jwt/logout`, loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        createUser,
        signIn,
        loading,
        googleSignIn,
        githubSignIn,
        logOut
    }
    return (
        <FirebaseContext.Provider value={authInfo}>
            {children}
        </FirebaseContext.Provider>
    );
};
FirebaseProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default FirebaseProvider;