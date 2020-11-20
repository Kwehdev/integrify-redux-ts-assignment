import rootReducer from "./redux/reducers";

//State Management

export type RootState = ReturnType<typeof rootReducer>;

//Themes
export type ColorTheme = {
  primaryColor: string;
  lightenedPrimary: string;
  darkenedPrimary: string;
  secondaryColor: string;
};

export type CountryData = {
  name: string;
  altSpellings: string[];
  borders: string[];
  capital: string;
  flag: string;
  languages: Language[];
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
};

export type Language = {
  name: string;
};
