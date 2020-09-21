import { ColorTheme } from "../../types";

export const SET_THEME = "SET_THEME";

export type ThemeAction = {
  type: typeof SET_THEME;
  payload: ColorTheme;
};

export const setTheme = (colorTheme: ColorTheme) => {
  return {
    type: SET_THEME,
    payload: colorTheme,
  };
};
