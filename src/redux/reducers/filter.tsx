import { FilterAction, SET_FILTER_QUERY } from "../actions/filter";

type FilterState = string;

const initialState = "";

export default function filterReducer(
  state: FilterState = initialState,
  action: FilterAction
): FilterState {
  switch (action.type) {
    case SET_FILTER_QUERY:
      return action.payload;
    default:
      return state;
  }
}
