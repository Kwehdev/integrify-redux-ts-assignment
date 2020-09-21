import {
  SortActions,
  SortDirections,
  SortHeaders,
  SORT_BY_DIRECTION,
  SORT_BY_HEADER,
} from "../actions/sort";

type SortState = {
  sortHeader: SortHeaders;
  sortDirection: SortDirections;
};

const initialState: SortState = {
  sortHeader: "name",
  sortDirection: "desc",
};

export default function sortReducer(
  state: SortState = initialState,
  action: SortActions
): SortState {
  switch (action.type) {
    case SORT_BY_HEADER:
      return {
        sortHeader: action.payload,
        sortDirection: "desc",
      };
    case SORT_BY_DIRECTION:
      return {
        ...state,
        sortDirection: action.payload,
      };
    default:
      return state;
  }
}
