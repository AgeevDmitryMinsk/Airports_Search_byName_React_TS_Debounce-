import {IAirportCountry, IAirportRegion, IAirportType} from "../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {airportSlice} from "./airportSlice";

interface HandbookState {
	loading: boolean
	types: IAirportType[]
	regions: IAirportRegion[]
	countries: IAirportCountry[]
}

const initialState: HandbookState = {
	loading: false,
	types: [],
	countries: [],
	regions: []
}

interface HandBookPayload {
	types: IAirportType[]
	countries: IAirportCountry[],
	regions: IAirportRegion[]

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
			state.types = action.payload.types
			state.countries = action.payload.countries
			state.regions = action.payload.regions
		}

	}
})

//экспортирую по дефолту handbookReducer в rootReducer
export default handbookSlice.reducer
