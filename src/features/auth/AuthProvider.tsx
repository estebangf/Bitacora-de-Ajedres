import React, { useEffect, useState } from "react";
import { Analytics, getAnalytics } from "firebase/analytics";
import { FirebaseApp, initializeApp } from "firebase/app";
import { doc, Firestore, getFirestore, onSnapshot, setDoc } from "firebase/firestore";
import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import firebaseConfig from "../../tools/firebase.config";
import AuthContext from "./AuthContext";


function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const firebase: FirebaseApp = initializeApp(firebaseConfig)
  const analytics: Analytics = getAnalytics(firebase)
  const firestore: Firestore = getFirestore(firebase)
  const auth: Auth = getAuth(firebase)

  useEffect(() => {
    auth.onAuthStateChanged(userObserver => {
      setUser(userObserver)
    })
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      login: (email: string, password: string) => signInWithEmailAndPassword(auth, email, password),
      signin: (name: string, lastname: string, email: string, password: string) =>
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log("Registred ERROR => ", errorMessage);
          }),
      signout: () => signOut(auth),
    }}
    >{children}</AuthContext.Provider>
  );
};

export default AuthProvider;