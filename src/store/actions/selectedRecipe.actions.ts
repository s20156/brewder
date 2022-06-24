import { SelectedRecipeId } from "../reducers/selectedRecipe.reducers";

export const SET_SELECTED_RECIPE = "setSelectedRecipe";

export interface SelectedRecipe {
    type: typeof SET_SELECTED_RECIPE;
    payload: SelectedRecipeId;
}

/**
 * Set recipes data
 * @param recipeId
 * @returns recipeId data 
 */
export function setSelectedRecipeId(recipeId: SelectedRecipeId):SelectedRecipe {
    return {
        type: SET_SELECTED_RECIPE,
        payload: recipeId,
    };
}

export type SelectedRecipeActions = SelectedRecipe;