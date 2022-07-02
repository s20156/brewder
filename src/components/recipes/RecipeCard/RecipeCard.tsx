import React from "react";
import { Card as AntCard } from "antd";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducer";
import { setSelectedRecipeId } from "../../../store/actions/selectedRecipe.actions";
import { Malt, Hop } from "../../../utils/interfaces/interface";


export interface RecipeCardProps {
    id: number;
    name: string;
    beerStyle: string;
    blg: number;
    ibu: number;
    color: number;
    malts: Malt[];
    hops: Hop[];
    additives: string[];
    yeast: string[];
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
    id,
    name,
    beerStyle
}) => {
    const dispatch = useDispatch();
    const storeId = useSelector((state: RootState) => state.selectedRecipe.id);
    const handleClick = () => {
        dispatch(setSelectedRecipeId(id === storeId ? { id: 0 } : { id: id }));
    }
    return (
        <AntCard className={classNames("card", id === storeId ? "card-active" : "")} title={name} onClick={handleClick}>
            <p>{beerStyle}</p>
        </AntCard>
    )
}
