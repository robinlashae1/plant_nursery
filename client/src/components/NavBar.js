import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import NotFound from "./NotFound";

function NavBar({ setUser }) {

  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/login">
        <LoginPage onLogin={setUser}/>
      </Route>
      <Route exact path="/signup">
        <SignUpPage onLogin={setUser}/>
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default NavBar;