export const SORT_BY_HEADER = 'SORT_BY_HEADER';
export const SORT_BY_DIRECTION = 'SORT_BY_DIRECTION';

export type SortHeaders = 'name' | 'population' | 'region';
export type SortDirections = 'asc' | 'desc';

export type SortByHeaderAction = {
	type: typeof SORT_BY_HEADER;
	payload: SortHeaders;
};

export type SortByDirectionAction = {
	type: typeof SORT_BY_DIRECTION;
	payload: SortDirections;
};

export type SortActions = SortByHeaderAction | SortByDirectionAction;

export const setSortHeader = (option: SortHeaders) => {
	return {
		type: SORT_BY_HEADER,
		payload: option,
	};
};

export const setSortDirection = (direction: SortDirections) => {
	return {
		type: SORT_BY_DIRECTION,
		payload: direction,
	};
};
