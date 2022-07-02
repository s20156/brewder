import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { EditRecipePage } from "../pages/EditRecipePage/EditRecipePage";


export const Routes: React.FC = () => {
  return (
    <Switch>
      <PublicRoute render={(props) => <LoginPage {...props}/>} path="/login" />
      <PublicRoute render={(props) => <DashboardPage {...props}/>} path="/dashboard" />
      <PublicRoute render={(props) => <EditRecipePage {...props}/>} path="/add" /> 
      <Redirect to="/login" />
    </Switch>
  )
}
