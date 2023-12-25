import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";



export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const singInWithGoogle = () => {
        signInWithPopup(auth, provider);
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubsCribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        singInWithGoogle,
        logout,

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;