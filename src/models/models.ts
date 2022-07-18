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
