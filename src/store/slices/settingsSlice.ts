import {createAction, createSlice} from "@reduxjs/toolkit";
import {useState} from "react";
import {IFilter} from "../../models/models";

export const setFilterCountry = createAction<string>('settings/setFilterCountry')
export const setFilterRegion = createAction<string>('settings/setFilterRegion')
export const setFilterType = createAction<string>('settings/setFilterType')

const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
		filter: {
			country: '',
			region: '',
			type: ''
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
	}
})

export const settingsReducer = settingsSlice.reducer
