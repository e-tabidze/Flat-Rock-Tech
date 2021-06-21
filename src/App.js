import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProjectAccessP from "./pages/ProjectAccess/Index";
import UserSetupP from "./pages/UserSetup/Index";

import "./App.css";

import userData from "./json/UserData.json";

function App() {
  const [dataIsSet, setDataIsSet] = useState(false);

  useEffect(() => {
    initTheData();
  }, []);

  const initTheData = () => {
    let exisData = localStorage.getItem("userData");
    if (!exisData) {
      localStorage.setItem("userData", JSON.stringify(userData));
      setDataIsSet(true);
    } else {
      setDataIsSet(true);
    }
    return;
  };


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ProjectAccessP dataIsSet={dataIsSet} />
          </Route>
          <Route path="/UserSetup/:id">
            <UserSetupP dataIsSet={dataIsSet} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
