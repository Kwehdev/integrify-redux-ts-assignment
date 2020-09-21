import { select, takeEvery } from "redux-saga/effects";
import { RootState } from "../../types";
import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "../actions/favourite";

function* saveFavouritesToLocalStorage() {
  const favourites = yield select((state: RootState) => state.favourites);
  localStorage.setItem("favourites", JSON.stringify(favourites));
}

export default function* favouritesSaga() {
  yield takeEvery(
    [ADD_FAVOURITE, REMOVE_FAVOURITE],
    saveFavouritesToLocalStorage
  );
}
