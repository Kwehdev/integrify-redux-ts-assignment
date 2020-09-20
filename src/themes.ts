import { ColorTheme } from './types';

export const darkTheme: ColorTheme = {
	primaryColor: `#282c34`,
	lightenedPrimary: `#3a3f4b`,
	darkenedPrimary: `#24272e`,
	secondaryColor: `#D7D3CB`,
};

export const lightTheme: ColorTheme = {
	primaryColor: `#D7D3CB`,
	lightenedPrimary: `#dbd7d0`,
	darkenedPrimary: `#c4bfb3`,
	secondaryColor: `#282c34`,
};

export const blueTheme: ColorTheme = {
	primaryColor: `#04395E`,
	lightenedPrimary: `#055085`,
	darkenedPrimary: `#033354`,
	secondaryColor: `#D7D3CB`,
};

export const yellowTheme: ColorTheme = {
	primaryColor: `#FDCA40`,
	lightenedPrimary: `#fdcf53`,
	darkenedPrimary: `#fcc531`,
	secondaryColor: `#282c34`,
};

type ThemeMap = {
	[key: string]: ColorTheme;
};

export const themeMap: ThemeMap = {
	dark: darkTheme,
	light: lightTheme,
	blue: blueTheme,
	yellow: yellowTheme,
};
