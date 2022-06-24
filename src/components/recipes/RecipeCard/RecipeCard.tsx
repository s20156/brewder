import React from "react";
import { Card as AntCard } from "antd";
import classNames from "classnames";

export interface RecipeCardProps {
    id: number;
    name: string;
    beerStyle: string;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
    id,
    name,
    beerStyle
}) => {
    const handleClick = () => {
        console.log(id);
    }

    return (
        <AntCard className={classNames("card", id === 11 ? "card-active" : "")} title={name} onClick={handleClick}>
            <p>{beerStyle}</p>
        </AntCard>
    )
}