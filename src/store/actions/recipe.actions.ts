import { RecipeCardsProps } from "../../components/recipes/RecipeCards/RecipeCards";

export const SET_RECIPES = "recipes"

export interface Recipes {
    type: typeof SET_RECIPES;
    payload: RecipeCardsProps;
}

/**
 * Set recipes data
 * @param recipes
 * @returns employees data
 */
export function setRecipes(recipes: RecipeCardsProps): Recipes {
    return {
        type: SET_RECIPES,
        payload: recipes
    };
}

export type RecipeActions = Recipes;