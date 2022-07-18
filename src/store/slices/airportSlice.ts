import {IAirport, IFilter} from "../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AirportState {
	loading: boolean
	error: string
	count : number
	airport: IAirport[]
	airportsContainer: IAirport[] // здесь в airportsContainer буду хранить те данные, которые не буду изменять
}

const initialState: AirportState = {
	loading: false,
	error: '',
	count: 1,
	airport: [],
	airportsContainer: []
}

interface AirportPayload {
	airport: IAirport[]
	count: number
}

export const airportSlice = createSlice({
	name: "airport",
	initialState: initialState,
	reducers:{
		fetching(state){
			state.loading = true
		},
		fetchSuccess(state, action: PayloadAction<AirportPayload>){
			state.loading = false
			state.airport = action.payload.airport
			state.airportsContainer = action.payload.airport
			state.count = action.payload.count
			state.error = ''

		},
		fetchError(state, action: PayloadAction<Error>){
			state.loading = false
			state.error = action.payload.message
		},
		fetchFilter(state, action:PayloadAction<IFilter>){
			state.airport = state.airportsContainer
				.filter(a=> a.type.includes(action.payload.type))
				.filter(a=> a.country.includes(action.payload.country))
				.filter(a=> a.region.includes(action.payload.region))
		}

	}
})

//экспортирую по дефолту airportReducer в rootReducer
export default airportSlice.reducer
