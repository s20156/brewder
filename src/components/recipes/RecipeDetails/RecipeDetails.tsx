import { Skeleton } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../store/reducers/rootReducer";
import Button from "../../interaction/Button";


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

export const RecipeDetails: React.FC = () => {
    const selectedRecipeId: number = useSelector((state: RootState) => state.selectedRecipe.id);
    const recipeData = useSelector((state: RootState) => state.recipe.recipeCards?.find(element => element.id === selectedRecipeId));
    return (
        (recipeData ?
            <div className="recipeDetails">
                <div className="data">
                    <h1>{recipeData.name}</h1>
                    <h2>{recipeData.beerStyle}</h2>
                    <div className="row">
                        <h3>Parameters:</h3>
                        <p>BLG: {recipeData.blg}</p>
                        <p>IBU: {recipeData.ibu}</p>
                        <p>Color: {recipeData.color}</p>
                    </div>
                </div>
                <div className="data">
                    <h3>Ingredients:</h3>
                    <p>Malts: </p>
                    {recipeData.malts.map((item,index) => (
                        <p key={index}>{item}</p>
                    ))}
                    <p>Hops: </p>
                    {recipeData.hops.map((item,index) => (
                        <p key={index}>{item}</p>
                    ))}
                    <p>Additives: </p>
                    {recipeData.additives.map((item,index) => (
                        <p key={index}>{item}</p>
                    ))}
                    <p>Yeast: </p>
                    {recipeData.yeast.map((item,index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
                <div className="buttonsList">
                    <Link className="button" to="/edit"><Button className="button" type="primary" label="Edit Recipe" /></Link>
                </div>
            </div>
            :
            <RecipeEmptyTab />
        )
    )
}