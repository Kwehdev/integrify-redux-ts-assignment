export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';

export type CountryCardData = {
	name: string;
};

type AddFavouriteAction = {
	type: typeof ADD_FAVOURITE;
	payload: CountryCardData;
};

type RemoveFavouriteAction = {
	type: typeof REMOVE_FAVOURITE;
	payload: string;
};

export type FavouriteActions = AddFavouriteAction | RemoveFavouriteAction;

export const addFavourite = (country: CountryCardData): FavouriteActions => {
	return {
		type: ADD_FAVOURITE,
		payload: country,
	};
};

export const removeFavourite = (name: string): FavouriteActions => {
	return {
		type: REMOVE_FAVOURITE,
		payload: name,
	};
};
