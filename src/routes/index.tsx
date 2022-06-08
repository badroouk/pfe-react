import { Suspense, lazy, useState } from "react";
import { useRoutes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

// -------------------------------------------------

const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default function MainRouter() {
  const [name, setName] = useState('');
  return useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <LoginPage setName={setName} />,
    },
    {
      path: "/register",
      element: <RegisterPage/>,
    }
  ]);
}

//const LandingPage = Loadable(lazy(() => import("../pages/LandingPage")));
