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
	// {
	// 	Component: Audio,
	// 	props: {
	// 		color: "#0ead69"
	// 	},
	// 	name: "Audio"
	// },
	// {
	// 	Component: BallTriangle,
	// 	props: {
	// 		color: "#0ead69"
	// 	},
	// 	name: "Ball Triangle"
	// },
	// {
	// 	Component: BallTriangle,
	// 	props: {
	// 		color: "#0ead69",
	// 		radius: 1
	// 	},
	// 	name: "Ball Triangle"
	// },
	// {
	// 	Component: Bars,
	// 	props: {
	// 		color: "#0ead69",
	// 		height: 100,
	// 		width: 110
	// 	},
	// 	name: "Ball Triangle"
	// },
	// {
	// 	Component: Circles,
	// 	props: {
	// 		color: "#0ead69",
	// 		height: 100,
	// 		width: 110
	// 	},
	// 	name: "Ball Triangle"
	// },
	// {
	// 	Component: Grid,
	// 	props: {
	// 		color: "#0ead69",
	// 		height: 100,
	// 		width: 110
	// 	},
	// 	name: "Grid"
	// },
	// {
	// 	Component: Grid,
	// 	props: {
	// 		color: "#0ead69",
	// 		height: 100,
	// 		width: 110,
	// 		radius: 8
	// 	},
	// 	name: "Grid"
	// },
	// {
	// 	Component: Hearts,
	// 	props: {
	// 		color: "#0ead69",
	// 		height: 100,
	// 		width: 110
	// 	},
	// 	name: "Hearts"
	// },
	// {
	// 	Component: MutatingDots,
	// 	props: {
	// 		color: "#0ead69",
	// 		secondaryColor: "#0ead69",
	// 		height: 100,
	// 		width: 110
	// 	},
	// 	name: "MutatingDots"
	// },
	// {
	// 	Component: MutatingDots,
	// 	props: {
	// 		color: "#0ead69",
	// 		secondaryColor: "#0ead69",
	// 		height: 100,
	// 		width: 110
	// 	},
	// 	name: "MutatingDots"
	// },
	// {
	// 	Component: Oval,
	// 	props: {
	// 		color: "#0ead69",
	// 		height: 100,
	// 		width: 110
	// 	},
	// 	name: "Oval"
	// },
	// {
	// 	Component: RevolvingDot,
	// 	props: {
	// 		color: "#0ead69",
	// 		height: 100,
	// 		width: 110
	// 	},
	// 	name: "RevolvingDot"
	// },
	// {
	// 	Component: RevolvingDot,
	// 	props: {
	// 		color: "#0ead69",
	// 		height: 100,
	// 		width: 110,
	// 		secondaryColor: "#FFC300"
	// 	},
	// 	name: "RevolvingDot"
	// },

	// {
	// 	Component: TailSpin,
	// 	props: {
	// 		color: "#0ead69",
	// 		height: 100,
	// 		width: 110
	// 	},
	// 	name: "TailSpin"
	// },
	// {
	// 	Component: Triangle,
	// 	props: {
	// 		color: "#0ead69",
	// 		height: 100,
	// 		width: 110
	// 	},
	// 	name: "Triangle"
	// },
	// {
	// 	Component: Watch,
	// 	props: {
	// 		color: "#0ead69",
	// 		height: 100,
	// 		width: 110
	// 	},
	// 	name: "Watch"
	// },
	// {
	// 	Component: Watch,
	// 	props: {
	// 		color: "#0ead69",
	// 		height: 100,
	// 		width: 110,
	// 		radius: 40
	// 	},
	// 	name: "Watch"
	// }
];


