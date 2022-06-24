import React from "react";
import { RecipeCards } from "../recipes/RecipeCards/RecipeCards";
import { RecipeDetails } from "../recipes/RecipeDetails/RecipeDetails";

export const Dashboard: React.FC = () => {
    
    return (
        <div className="dashboardContent">
            <RecipeCards />
            <RecipeDetails id={12} name="Bloody good ale" beerStyle="IPA" blg={15.1} ibu={70} color={30} malts={["Pale ale: 5kg"]} hops={["Marynka: 30g", "Cascade: 70g"]} yeast={["Pale ale yeast"]} additives={[]} />
        </div>
    )
}
