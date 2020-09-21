import {
  ADD_FAVOURITE,
  CountryCardData,
  FavouriteActions,
  REMOVE_FAVOURITE,
} from "../actions/favourite";

const persistedState = localStorage.getItem("favourites")
  ? JSON.parse(localStorage.getItem("favourites")!)
  : [];

const initialState: CountryCardData[] = persistedState;

export default function favouriteReducer(
  state = initialState,
  action: FavouriteActions
): CountryCardData[] {
  switch (action.type) {
    case ADD_FAVOURITE:
      return [...state, action.payload];
    case REMOVE_FAVOURITE:
      return state.filter(({ name }) => name !== action.payload);
    default:
      return state;
  }
}
