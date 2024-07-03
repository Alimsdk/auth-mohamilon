import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import propTypes from 'prop-types'

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);

    console.log('baccha',children);

    if(loading){
        return <span className="loading text-center mt-40 mx-auto flex loading-spinner loading-lg"></span>
    }

   if(user){
    return children;
   }

    return <Navigate to='/login'/> 
};

export default PrivateRoute;

PrivateRoute.propTypes={
   children:propTypes.node
}