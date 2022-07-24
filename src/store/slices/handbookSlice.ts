import {
	IAirportContinent,
	IAirportCountry,
	IAirportMunicipality,
	IAirportRegion,
	IAirportType
} from "../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {airportSlice} from "./airportSlice";

interface HandbookState {
	loading: boolean
	types: IAirportType[]
	regions: IAirportRegion[]
	countries: IAirportCountry[]
	continents: IAirportContinent[]
	municipalities : IAirportMunicipality[]
}

const initialState: HandbookState = {
	loading: false,
	types: [],
	countries: [],
	regions: [],
	continents: [],
	municipalities: []
}

interface HandBookPayload {
	types: IAirportType[]
	countries: IAirportCountry[],
	regions: IAirportRegion[],
	continents: IAirportContinent[]
	municipalities : IAirportMunicipality[]
}

export const handbookSlice = createSlice({
	name: 'handbook',
	initialState,
	reducers: {
		fetching(state) {
			state.loading = true
		},
		fetchSuccess(state, action: PayloadAction<HandBookPayload>) {
			state.loading = false
			state.types = action.payload.types.sort()
			state.countries = action.payload.countries.sort()
			state.regions = action.payload.regions.sort()
			state.continents = action.payload.continents.sort()

			// state.municipalities = action.payload.municipalities.map(el=> el.replace(/\W/, '')).sort()
			 state.municipalities = action.payload.municipalities.sort((a:string,b:string) => b > a ? 1 : -1).sort((a) => a[0].match(/[a-zA-Z]/) ? -1 :0)
			//state.municipalities = action.payload.municipalities.sort()
		}


	}
})

//экспортирую по дефолту handbookReducer в rootReducer
export default handbookSlice.reducer
