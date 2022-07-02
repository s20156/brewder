import React from "react";
import {RouteProps} from "react-router";
import { EditRecipeForm } from "../../components/Forms/EditRecipeForm/EditRecipeForm";
import { DashboardLayout } from "../../layouts/DashboardLayout";

export const EditRecipePage: React.FC<RouteProps> = () => {
  return (
    <DashboardLayout>
      <EditRecipeForm />
    </DashboardLayout>
  )
}
