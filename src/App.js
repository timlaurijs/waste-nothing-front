import "./App.css";

import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import MyProfile from "./pages/MyProfile/MyProfile";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/logIn" component={LogIn} />
        <Route exact path="/myProfile" component={MyProfile} />
      </Switch>
    </div>
  );
}

export default App;
