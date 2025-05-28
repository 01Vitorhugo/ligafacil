import { HashRouter  as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import ProtectedRoute from "../routs/protectedRouter";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Profile from "../pages/profile";
import Championship from "../pages/championship";
import Contact from "../pages/contact";
import About from "../pages/about";
import PublicGame from "../pages/publicGame";
import GamePage from "../pages/gamesPage";
import EditProfile from "../pages/editProfile";

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
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                
                <Route
                    path="/publicgame"
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

                 <Route
                    path="/editprofile"
                    element={
                        <ProtectedRoute>
                            <Navbar />
                            <EditProfile />
                        </ProtectedRoute>
                    }
                />


            </Routes>
            <Footer />
        </Router>
    );
}