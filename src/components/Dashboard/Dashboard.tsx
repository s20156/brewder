import React from "react";
import { RecipeCard } from "../recipes/RecipeCard/RecipeCard";

export const Dashboard: React.FC = () => {
    
    return (
        <div className="dashboardContent">
            <h1>Dashboard</h1>
            <RecipeCard id={12} name="Bloody good ale" beerStyle="IPA" />
        </div>
    )
}
