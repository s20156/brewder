import React from "react";
import { RecipeCards } from "../recipes/RecipeCards/RecipeCards";
import { RecipeDetails } from "../recipes/RecipeDetails/RecipeDetails";

export const Dashboard: React.FC = () => {
    return (
        <div className="dashboardContent">
            <RecipeCards />
            <RecipeDetails />
        </div>
    )
}
