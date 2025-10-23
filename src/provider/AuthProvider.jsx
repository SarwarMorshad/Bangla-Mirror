import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

import auth from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // get current user info using useEffect and onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
      setUser(CurrentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Log out function
  const logout = () => {
    return signOut(auth);
  };

  // Log In
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authData = {
    user,
    setUser,
    loading,
    createUser,
    logout,
    login,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
