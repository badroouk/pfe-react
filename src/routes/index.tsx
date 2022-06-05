import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";

// -------------------------------------------------

const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default function MainRouter() {
  return useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
  ]);
}

const LandingPage = Loadable(lazy(() => import("../pages/LandingPage")));
