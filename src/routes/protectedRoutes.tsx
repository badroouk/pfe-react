import React from 'react';
import { Route, Navigate, RouteProps, Routes } from 'react-router-dom'
import AdminPage from '../pages/AdminPage';
import LandingPage from '../pages/LandingPage';

interface Props extends RouteProps {
    isAdmin: string;
    isAuth: boolean;
}

const ProtectedRoute = ({ isAuth, isAdmin, ...restProps }: Props) => {
    if (isAuth) {

        if (isAdmin == "1") {
            return <Routes><Route path="/admin" element={<AdminPage title={"Authors Table"}
                captions={["Author", "Function", "Status", "Employed", ""]} />} />
                <Route path="/" element={<LandingPage />} /></Routes>
        } else if (isAdmin == "0") {
            return <Routes><Route path="/" element={<LandingPage />} /></Routes>
        }

    } else {
        return <Navigate to={"/login"} />
    }




}

export default ProtectedRoute;