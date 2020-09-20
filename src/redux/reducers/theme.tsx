import { darkTheme } from '../../themes';
import { ColorTheme } from '../../types';
import { SET_THEME, ThemeAction } from '../actions/theme';

// Fallback for future proofing. ThemeState may encompass more than just themes in future.
export type ThemeState = ColorTheme;

const initialState: ThemeState = darkTheme;

export default function themeReducer(
	state = initialState,
	action: ThemeAction
): ThemeState {
	switch (action.type) {
		case SET_THEME:
			return action.payload;
		default:
			return state;
	}
}
