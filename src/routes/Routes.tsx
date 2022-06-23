import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";


export const Routes: React.FC = () => {
  return (
    <Switch>
    <PublicRoute render={(props) => <LoginPage {...props}/>} path="/login" />
    <PublicRoute render={(props) => <DashboardPage {...props}/>} path="/dashboard" />  
    <Redirect to="/login" />
    </Switch>
  )
}
