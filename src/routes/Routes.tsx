import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { LoginPage } from "../pages/LoginPage";


export const Routes: React.FC = () => {
  return (
    <Switch>
    <PublicRoute render={(props) => <LoginPage {...props}/>} path="/login" />
      <Redirect to="/login" />
    </Switch>
  )
}
