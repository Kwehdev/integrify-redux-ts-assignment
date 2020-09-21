import {
  CountryAction,
  GET_ALL_COUNTRIES_FAIL,
  GET_ALL_COUNTRIES_SUCCESS,
} from "../actions/country";

import { CountryData } from "../../types";

type CountryState = {
  data: CountryData[];
  error: Error | undefined;
};
const initialState: CountryState = {
  data: [],
  error: undefined,
};

export default function countryReducer(
  state: CountryState = initialState,
  action: CountryAction
): CountryState {
  switch (action.type) {
    case GET_ALL_COUNTRIES_SUCCESS:
      return action.payload;
    case GET_ALL_COUNTRIES_FAIL:
      return action.payload;
    default:
      return state;
  }
}
