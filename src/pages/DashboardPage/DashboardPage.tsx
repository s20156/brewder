import React from "react";
import {RouteProps} from "react-router";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { DashboardLayout } from "../../layouts/DashboardLayout";

export const DashboardPage: React.FC<RouteProps> = () => {
  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  )
}
