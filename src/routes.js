import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/src/home";
import SignIn from "./pages/signIn/src/signIn";
import Login from "./pages/logIn/src/login";
import { isAuthenticated } from "./services/auth";

function myRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isAuthenticated() ? <Home /> : <Navigate to="/login" replace />} />
                <Route path="/signin" element={isAuthenticated() ? <Navigate to="/" replace /> : <SignIn />} />
                <Route path="/login" element={isAuthenticated() ? <Navigate to="/" replace /> : <Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default myRoutes;