import { Skeleton } from "antd";
import React from "react";
import { RecipeCard, RecipeCardProps } from "../RecipeCard/RecipeCard";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducer";

export interface RecipeCardsProps {
    recipeCards: RecipeCardProps[];
}

export const RecipeCards: React.FC = () => {
    const cards: RecipeCardsProps = useSelector((state: RootState) => state.recipe);
    return (
        <div className="cardsGroup">
            {!!cards ? 
                cards.recipeCards.map((element) => <RecipeCard { ...element } key={element.id} />) 
                : <Skeleton /> }
        </div>
    )
}
