import { Skeleton } from "antd";
import React from "react";
import { RecipeCard, RecipeCardProps } from "../RecipeCard/RecipeCard";
 
export interface RecipeCardsProps {
    recipeCards: RecipeCardProps[];
}

export const RecipeCards: React.FC = () => {
    const cards: RecipeCardsProps = {
        recipeCards: [
            {
                id: 11,
                name: "Bloody good IPA",
                beerStyle: "IPA"
            },
            {
                id: 12,
                name: "Black IPA",
                beerStyle: "Black IPA"
            }
        ]
    }
    return (
        <div className="cardsGroup">
            {!!cards ? 
                cards.recipeCards.map((element) => <RecipeCard { ...element } key={element.id} />) 
                : <Skeleton /> }
        </div>
    )
}
