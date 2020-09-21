import { Dispatch } from "redux";
import { CountryData } from "../../types";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_ALL_COUNTRIES_SUCCESS = "GET_ALL_COUNTRIES_SUCCESS";
export const GET_ALL_COUNTRIES_FAIL = "GET_ALL_COUNTRIES_FAIL";
const baseURL = "https://restcountries.eu/rest/v2/";

type APIResponseTypes =
  | typeof GET_ALL_COUNTRIES_SUCCESS
  | typeof GET_ALL_COUNTRIES_FAIL;

export type CountryAction = {
  type: APIResponseTypes;
  payload: {
    data: CountryData[];
    error: undefined | Error;
  };
};

export const setSuccessfulAPICall = (data: CountryData[]): CountryAction => {
  return {
    type: GET_ALL_COUNTRIES_SUCCESS,
    payload: {
      data,
      error: undefined,
    },
  };
};

export const setFailedApiCall = (error: Error): CountryAction => {
  return {
    type: GET_ALL_COUNTRIES_FAIL,
    payload: {
      data: [],
      error,
    },
  };
};

export const getAllCountries = () => {
  const endpoint = "all";
  return (dispatch: Dispatch) => {
    fetch(`${baseURL}${endpoint}`)
      .then((res) => res.json())
      .then((data) => dispatch(setSuccessfulAPICall(data)))
      .catch((error) => dispatch(setFailedApiCall(error)));
  };
};
