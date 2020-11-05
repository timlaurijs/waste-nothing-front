import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import MyProfile from "./pages/MyProfile/MyProfile";
import Navigation from "./components/Navigation/Navigation";
import { selectToken } from "./store/user/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/logIn" component={LogIn} />
        {token ? <Route exact path="/myProfile" component={MyProfile} /> : null}
      </Switch>
    </div>
  );
}

export default App;
