import {Rings} from "react-loader-spinner";

export interface IAirport {
	id: number;
	name: string;
	ident: string;
	local_code?: any;
	region: string;
	type: string;
	country: string;
}

export interface ServerResponse<T> {
	count: number
	next: number | null
	previous: number | null
	results: T[]
}

export type IAirportType = string
export type IAirportRegion = string
export type IAirportCountry = string
export type IAirportContinent = string
export type IAirportMunicipality = string

export interface IFilter {
	type: IAirportType
	region: IAirportRegion
	country: IAirportCountry
	continents: IAirportContinent
	municipality: IAirportMunicipality
}

// export type TEMS_PER_PAGE_Type = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export interface AuthServerResponse {
	access: string;
	refresh: string;
}

export interface authData{
	username: string;
	//email: string;
	password: string;
}


export interface IAirportDetails {
	ident: string;
	local_code?: any;
	name: string;
	coordinates?: string;
	elevation_ft?: string;
	gps_code?: any;
	iata_code?: any;
	continent?: string;
	type?: string;
	country?: string;
	region?: string;
	municipality?: string;
}


// различные варианты Spinner:
export const dataSpinner = [
	{
		Component: Rings,
		props: {
			color: `fuchsia`,
			height: 200,
			width: 210
		},
		name: "Rings"
	},
	{
		Component: Audio,
		props: {
			color: "#0ead69"
		},
		name: "Audio"
	},
];
