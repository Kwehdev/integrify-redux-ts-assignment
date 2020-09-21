import { combineReducers } from "redux";

import countryReducer from "./country";
import favouriteReducer from "./favourite";
import filterReducer from "./filter";
import sortReducer from "./sort";
import themeReducer from "./theme";

const rootReducer = combineReducers({
  countries: countryReducer,
  theme: themeReducer,
  filterQuery: filterReducer,
  sortOptions: sortReducer,
  favourites: favouriteReducer,
});

export default rootReducer;
