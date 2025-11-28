import React, { useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext } from 'react';
import { CgPassword } from 'react-icons/cg';
import axios from 'axios';

export const AuthContext = createContext();
const auth = getAuth(app)

export const Authprovider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
  setLoading(true);
 
  return signInWithEmailAndPassword(auth, email, password)
}

const logOut = () => {
  setLoading(true);
  return signOut(auth);
}

    useEffect( () => {
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = { email: userEmail}
        setUser(currentUser);
        console.log("current user", currentUser)
        setLoading(false);
        //if user exist then issue a token
        if(currentUser){
          
          axios.post( 'https://car-clinic-server-mu.vercel.app/jwt', loggedUser, {
            withCredentials: true
          })
          .then(res => {
            console.log('token response', res.data)
          }
        )
        }
        else{
          axios.post('https://car-clinic-server-mu.vercel.app/logout', loggedUser, {
            withCredentials: true
          })
          .then(res => {
            console.log(res.data)
          })
        }
      });
      return () => {
        return unsubscribe();
      }

    }, [])

    const AuthInfo = {
      user,
      loading,
      createUser,
      signIn,
      logOut

    }
  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  )
}
