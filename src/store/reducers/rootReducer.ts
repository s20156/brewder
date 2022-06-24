import { combineReducers } from "redux";
import recipesReducer from "./recipe.reducers";
import selectedRecipeReducer from "./selectedRecipe.reducers";

const appReducer = combineReducers({
    recipe: recipesReducer,
    selectedRecipe: selectedRecipeReducer,
});

const rootReducer = (state: any, action: any) =>{
    return appReducer(state, action);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;