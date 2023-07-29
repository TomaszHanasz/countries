export interface ICountries {
  name: Name;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  capital: string;
  region: string;
  subregion: string;
  languages: Languages;
  latlng?: number[] | null;
  borders?: string[] | null;
  area: number;
  flag: string;
  maps: Maps;
  population: number;
  flags: Flags;
  coatOfArms: CoatOfArms;
}
export interface Name {
  common: string;
  official: string;
}

export interface Currencies {
  [key: string]: Currency;
}
export interface Currency {
  name: string;
  symbol: string;
}

export interface Languages {
  [key: string]: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}
export interface CoatOfArms {
  png: string;
  svg: string;
}
