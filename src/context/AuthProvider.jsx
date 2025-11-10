import React, { useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";



import AuthContext from "../AuthContext";
import { auth } from "../authentication/firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };
  
  useEffect(() => {
    // mount the observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      
      setUser(currentUser);
      setLoading(false);
    });
    // clear the observer on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  const googleSign = () => {
    return signInWithPopup(auth, googleProvider);
  };


  const authInfo = {
    user,
    setUser,
    createUser,
    logIn,
    logout,
    loading,
    googleSign,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
