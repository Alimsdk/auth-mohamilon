import { createContext, useEffect, useState } from "react";
import propTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext=createContext(null);


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const googleProvider=new GoogleAuthProvider();

    const createNewUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const logOutUser=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('observing user data',currentUser);
            setLoading(false);
        });

        return ()=>{
            unSubscribe();
        }
    },[])
   const authInfo={user,createNewUser,signInUser,logOutUser,loading,googleSignIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;


AuthProvider.propTypes={
    children: propTypes.node
}