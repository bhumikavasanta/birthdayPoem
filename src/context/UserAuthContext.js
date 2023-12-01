import React, {
  createContext, useContext, useEffect, useState, useMemo,
} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import { authInstance } from '../utils/firebase';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logInWithEmailAndPassword(email, password) {
    return signInWithEmailAndPassword(authInstance, email, password);
  }

  function logInWithProvider(provider) {
    return signInWithPopup(authInstance, provider);
  }

  function signUp(email, password) {
    return createUserWithEmailAndPassword(authInstance, email, password);
  }

  function forgotPassword(email) {
    return sendPasswordResetEmail(authInstance, email);
  }

  function logOut() {
    return signOut(authInstance);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authInstance, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authValue = useMemo(() => ({
    user, logInWithEmailAndPassword, logInWithProvider, signUp, forgotPassword, logOut,
  }), [user]);

  return (
    <userAuthContext.Provider value={authValue}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
