import React from "react";
import { Link } from "react-router-dom";
import Button from "../../interaction/Button";

export const AddRecipe: React.FC = () => {
    return (
        <div>
            <Link to={"/add"}><Button buttonType="button" className="buttonAdd" label="Add Recipe" /></Link>
        </div>
    )
}