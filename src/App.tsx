
  
import { Fragment } from 'react';
import MainRouter from './routes/index';
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <Router>
      <Fragment>
        <MainRouter/>
      </Fragment>
    </Router>
  );
}

export default App;