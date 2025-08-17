// src/App.js
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useAuth from "./useAuth";
import NavBar from "./NavBar";

function Protected({ children }) {
    const { user, loading } = useAuth();
    if (loading) return null;
    return user ? children : <Navigate to="/login" replace />;
}

export default function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<h2>Welcome to Aluminary</h2>} />
                <Route
                    path="/app/dashboard"
                    element={
                        <Protected>
                            <h2>Dashboard (signed-in users)</h2>
                        </Protected>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
