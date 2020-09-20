export const SET_FILTER_QUERY = 'SET_FILTER_QUERY';

export type FilterAction = {
	type: typeof SET_FILTER_QUERY;
	payload: string;
};

export const setFilterQuery = (query: string) => {
	return {
		type: SET_FILTER_QUERY,
		payload: query,
	};
};
