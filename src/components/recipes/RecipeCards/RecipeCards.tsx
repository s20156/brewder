import { Skeleton } from "antd";
import React from "react";
import { RecipeCard, RecipeCardProps } from "../RecipeCard/RecipeCard";
import { recipeMock } from "../../../utils/mocks/recipeMocks"; 

export interface RecipeCardsProps {
    recipeCards: RecipeCardProps[];
}

export const RecipeCards: React.FC = () => {
    const cards: RecipeCardsProps = recipeMock;
    return (
        <div className="cardsGroup">
            {!!cards ? 
                cards.recipeCards.map((element) => <RecipeCard { ...element } key={element.id} />) 
                : <Skeleton /> }
        </div>
    )
}
