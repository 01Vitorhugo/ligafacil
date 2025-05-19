import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import ProtectedRoute from "../routs/protectedRouter";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Profile from "../pages/profile";

export default function RoutesPage() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Navbar />
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Navbar />
                            <Profile />
                        </ProtectedRoute>
                    }
                />

            </Routes>
            <Footer />
        </Router>
    );
}