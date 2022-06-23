import React from "react";
import { Card as AntCard } from "antd";

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
        <AntCard className="card" title={name} onClick={handleClick}>
            <p>{beerStyle}</p>
        </AntCard>
    )
}