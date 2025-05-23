import { HashRouter  as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import ProtectedRoute from "../routs/protectedRouter";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Profile from "../pages/profile";
import Championship from "../pages/championship";
import Contact from "../pages/contact";
import About from "../pages/about";
import PublicGame from "../pages/publicGame";
import GamePage from "../pages/gamesPage";

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
                
                <Route
                    path="/profile/publicgame"
                    element={
                        <ProtectedRoute>
                            <Navbar />
                            <PublicGame />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/championship"
                    element={
                        <ProtectedRoute>
                            <Navbar />
                            <Championship />
                        </ProtectedRoute>
                    }
                />

                  <Route
                    path="/contact"
                    element={
                        <ProtectedRoute>
                            <Navbar />
                            <Contact />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/about"
                    element={
                        <ProtectedRoute>
                            <Navbar />
                            <About />
                        </ProtectedRoute>
                    }
                />

                
                <Route
                    path="/games"
                    element={
                        <ProtectedRoute>
                            <Navbar />
                            <GamePage />
                        </ProtectedRoute>
                    }
                />


            </Routes>
            <Footer />
        </Router>
    );
}