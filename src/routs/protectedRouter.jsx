import { Navigate } from "react-router-dom";
import { auth } from "../database";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <p>Carregando...</p>; // Evita redirecionamento antes de verificar estado
    }

    return user ? children : <Navigate to="/login" />;
}