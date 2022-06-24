import { RecipeCardsProps } from "../../components/recipes/RecipeCards/RecipeCards";
import { recipeMock } from "../../utils/mocks/recipeMocks";
import { RecipeActions, SET_RECIPES } from "../actions/recipe.actions";

export const initialEmployeesState: RecipeCardsProps = recipeMock;

/**
 * Employees reducer
 * @param [state]
 * @param action
 * @returns state
 */

export default function recipesReducer(
    state: RecipeCardsProps = initialEmployeesState,
    action: RecipeActions,
) {
    switch (action.type) {
        case SET_RECIPES: {
            return {
                ...action.payload,
            };
        } 
        default: {
            return state;
        }
    }
}
