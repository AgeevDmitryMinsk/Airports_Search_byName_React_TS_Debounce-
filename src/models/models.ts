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

export interface IFilter {
	type: IAirportType
	region: IAirportRegion
	country: IAirportCountry
}

export type TEMS_PER_PAGE_Type = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10


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


