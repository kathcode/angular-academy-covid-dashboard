export interface ISummaryResponse {
  Countries: Array<ICountry>;
  Date: string;
  Global: ISummary;
}

export interface ISummary {
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface ICountry {
  Country: string;
  CountryCode: string;
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: object;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface ICountryDataDate {
  Cases: number;
  City: string;
  CityCode: string;
  Country: string;
  CountryCode: string;
  Date: string;
  Lat: string;
  Lon: string;
  Province: string;
  Status: string;
}

export interface IGraphData {
  data: Array<ICountryDataDate>;
  series: Array<ISeries>;
}

export interface ISeries {
  xKey: string;
  yKey: string;
}
