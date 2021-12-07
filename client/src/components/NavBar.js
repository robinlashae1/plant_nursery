import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import NotFound from "./NotFound";

function NavBar() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/signup">
        <SignupPage />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default NavBar;