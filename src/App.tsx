import { Fragment, useEffect, useState } from "react";
import MainRouter from "./routes/index";
import { BrowserRouter as Router } from "react-router-dom";
import WithSubnavigation from "./components/chart/navbar";
import ProtectedRoute from "./routes/protectedRoutes";

function App() {
  const [isAdmin, setAdmin] = useState((() => {
    const role = window.localStorage.getItem('role');
    return role ? role : ""
  }));
  const [isAuth, setAuth] = useState(() => {
    const user = window.localStorage.getItem('user');
    return user ? true : false
  });
  const [name, setName] = useState(() => {
    const user = window.localStorage.getItem('user');
    return user ? user : ""
  });
  useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:8000/api/user', {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });

        const content = await response.json();

        setName(content.email);
        setAdmin(content.role);
      }

    )();
    window.localStorage.setItem("user", name);
    window.localStorage.setItem("role", isAdmin);

  });
  useEffect(() => {
    const role = window.localStorage.getItem("role");
    const user = window.localStorage.getItem("user");

    if (user !== null) {
      setAuth(true);
      setName(user);
      if (role !== null) {
        setAdmin(role);
      }
    }

  }, []);

  return (
    <Router>
      <WithSubnavigation isadmin={isAdmin} name={name} setadmin={setAdmin} setName={setName} />
      <Fragment>
        <MainRouter setName={setName} />
        <ProtectedRoute isAuth={isAuth} isAdmin={isAdmin} />
        {/* <Protected isAuth={isAuth} path={"/"} element={<LandingPage />}/> */}
      </Fragment>
    </Router>
  );
}

export default App;
