import { Fragment } from "react";
import MainRouter from "./routes/index";
import { BrowserRouter as Router } from "react-router-dom";
import WithSubnavigation from "./components/chart/navbar";

function App() {
  return (
    <Router>
      <WithSubnavigation />
      <Fragment>
        <MainRouter />
      </Fragment>
    </Router>
  );
}

export default App;
