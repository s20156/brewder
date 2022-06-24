import { Skeleton } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../interaction/Button";
import { RecipeCardProps } from "../RecipeCard/RecipeCard";


export const RecipeEmptyTab: React.FC = () => {
    return (
        <div className="skeletonElement">
            <div className="skeleton">
                <Skeleton />
            </div>
            <div className="description">
                Choose a recipe to view data or
            </div>
            <div className="addRecipeButton">
            </div>
        </div>
    );
}

export const RecipeDetails: React.FC<RecipeCardProps> = ({
    id,
    name,
    beerStyle,
    blg,
    ibu,
    color,
    malts,
    hops,
    additives,
    yeast

}) => {
    return (
        <div className="recipeDetails">
            <div className="data">
                <h1>{name}</h1>
                <h2>{beerStyle}</h2>
                <div className="row">
                    <h3>Parameters:</h3>
                    <p>BLG: {blg}</p>
                    <p>IBU: {ibu}</p>
                    <p>Color: {color}</p>
                </div>
            </div>
            <div className="data">
                <h3>Ingredients:</h3>
                <p>Malts: </p>
                {malts.map((item,index) => (
                    <p key={index}>{item}</p>
                ))}
                <p>Hops: </p>
                {hops.map((item,index) => (
                    <p key={index}>{item}</p>
                ))}
                <p>Additives: </p>
                {additives.map((item,index) => (
                    <p key={index}>{item}</p>
                ))}
                <p>Yeast: </p>
                {yeast.map((item,index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div className="buttonsList">
                <Link className="button" to="/edit"><Button className="button" type="primary" label="Edit Recipe" /></Link>
            </div>
        </div>
    )
}