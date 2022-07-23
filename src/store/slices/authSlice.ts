import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAirportCountry, IAirportRegion, IAirportType} from "../../models/models";

const ACCESS_KEY = 'Dima-access'
const USERNAME_KEY = 'Dima-username'

interface AuthState {
	access: string
	//refresh: string
	username: string
	isAuth: boolean
	error: string
}

const initialState: AuthState = {
	access: localStorage.getItem(ACCESS_KEY) || '',
	//refresh: '',
	username: localStorage.getItem(USERNAME_KEY) || '',
	isAuth: Boolean(localStorage.getItem(ACCESS_KEY)),
	error: ''
}

interface AuthPayload {
	access: string
	//refresh: string
	username: string
}


export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, action: PayloadAction<AuthPayload>) {
			state.access = action.payload.access
			//state.refresh = action.payload.refresh
			state.username = action.payload.username
			state.isAuth = Boolean(action.payload.access)
			state.error = ''

			localStorage.setItem(ACCESS_KEY, action.payload.access)
			localStorage.setItem(USERNAME_KEY, action.payload.username)
		},
		fetchError(state, action: PayloadAction<any>) {
			//state.loading = false
			state.error = action.payload
		},
		logout(state ) {
			state.access = ''
			state.username = ''
			state.isAuth = false
			localStorage.removeItem(ACCESS_KEY)
			localStorage.removeItem(USERNAME_KEY)
		}
	}
})

//экспортирую по дефолту authReducer в rootReducer
//export default authSlice.reducer

//лучше просто экспортировать без всяких default
export const authReducer = authSlice.reducer
