import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import { MarketingApp } from "./components/MarketingApp";
import { AuthApp } from "./components/AuthApp";

export const App = () => {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  return (
    <BrowserRouter>
      <div>
        <Header isSignedIn={isSignedIn} />
        <Switch>
          <Route path="/auth">
            <AuthApp onSignIn={() => setIsSignedIn(true)} />
          </Route>
          <Route path="/">
            <MarketingApp />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
