import { Navigate } from "react-router-dom";
import { auth } from "../database";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    return user ? children : <Navigate to="/login" />;
}
