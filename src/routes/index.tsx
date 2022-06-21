import { Suspense, lazy, useState, useEffect } from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

// -------------------------------------------------


export default function MainRouter(props: { setName: (name: string) => void }) {



  return <Routes>
    <Route path="login" element={<LoginPage setName={props.setName} />} />
    <Route path="register" element={<RegisterPage />} />
  </Routes>

}