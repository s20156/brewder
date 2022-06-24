import { SelectedRecipeActions, SET_SELECTED_RECIPE } from "../actions/selectedRecipe.actions";

export interface SelectedRecipeId {
    id: number;
}

export const initialSelectedRecipeState: SelectedRecipeId = {
    id: 0,
};

/**
 * Recipe Id reducer
 * @param [state]
 * @param action
 * @returns state
 */

export default function selectedRecipeReducer(
    state: SelectedRecipeId = initialSelectedRecipeState,
    action: SelectedRecipeActions,
) {
    switch (action.type) {
        case SET_SELECTED_RECIPE: {
            return {
                ...action.payload,
            };
        }
        default: {
            return state;
        }
    }
}