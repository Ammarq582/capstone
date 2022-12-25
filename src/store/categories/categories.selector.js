import {createSelector} from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    console.log('selector fired');
    return categories.reduce((acc, current) => {
      const {title, items}  = current;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})

  }
  
)