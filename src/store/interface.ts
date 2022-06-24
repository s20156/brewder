import { ThunkAction } from "redux-thunk";
import { RecipeActions } from "./actions/recipe.actions";
import { RootState } from "./reducers/rootReducer";

export type Action = 
    | RecipeActions;
export type ThunkResult<T =any> = ThunkAction<any, RootState, undefined, Action>;