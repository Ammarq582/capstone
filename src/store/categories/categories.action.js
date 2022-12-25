import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const setCategories = (categoryArray) =>
createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoryArray)