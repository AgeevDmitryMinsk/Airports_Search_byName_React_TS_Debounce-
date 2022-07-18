import {IAirport} from "../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AirportState {
	loading: boolean
	error: string
	count : number
	airport: IAirport[]

}

const initialState: AirportState = {
	loading: false,
	error: '',
	count: 1,
	airport: []
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
			state.count = action.payload.count
			state.error = ''

		},
		fetchError(state, action: PayloadAction<Error>){
			state.loading = false
			state.error = action.payload.message

		}
	}
})

//экспортирую по дефолту airportReducer в rootReducer
export default airportSlice.reducer
