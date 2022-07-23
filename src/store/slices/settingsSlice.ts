import {createAction, createSlice} from "@reduxjs/toolkit";

export const setFilterCountry = createAction<string>('settings/setFilterCountry')
export const setFilterRegion = createAction<string>('settings/setFilterRegion')
export const setFilterType = createAction<string>('settings/setFilterType')
export const setFilterItemsPerPage = createAction<number>('settings/setFilterItemsPerPage')
export const setFilterContinent = createAction<string>('settings/setFilterContinent')
export const setFilterMunicipality = createAction<string>('settings/setFilterMunicipality')

const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
		filter: {
			country: '',
			region: '',
			type: '',
			continent: '',
			municipality: '',
			items_per_page: 2
		}
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(setFilterCountry, (state, action) => {
				state.filter.country = action.payload
			})
			.addCase(setFilterType, (state, action) => {
				state.filter.type = action.payload
			})
			.addCase(setFilterRegion, (state, action) => {
				state.filter.region = action.payload
			})
			.addCase(setFilterContinent, (state, action) => {
				state.filter.continent = action.payload
			})
			.addCase(setFilterMunicipality, (state, action) => {
				state.filter.municipality = action.payload
			})
			.addCase(setFilterItemsPerPage, (state, action) => {
				state.filter.items_per_page = action.payload
			})
	}
})

export const settingsReducer = settingsSlice.reducer


