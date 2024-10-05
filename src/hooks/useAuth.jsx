import { useContext } from "react";
import { FirebaseContext } from "../FirebaseProvider/FirebaseProvider";



const useAuth = () => {
    const auth=useContext(FirebaseContext);
    return auth;
};

export default useAuth;