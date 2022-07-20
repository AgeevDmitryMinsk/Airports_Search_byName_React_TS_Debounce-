import {createAction, createSlice} from "@reduxjs/toolkit";
import {useState} from "react";
import {IFilter, TEMS_PER_PAGE_Type} from "../../models/models";

export const setFilterCountry = createAction<string>('settings/setFilterCountry')
export const setFilterRegion = createAction<string>('settings/setFilterRegion')
export const setFilterType = createAction<string>('settings/setFilterType')
export const setFilterItemsPerPage = createAction<number>('settings/setFilterItemsPerPage')

const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
		filter: {
			country: '',
			region: '',
			type: '',
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
			.addCase(setFilterItemsPerPage, (state, action) => {
				state.filter.items_per_page = action.payload
			})
	}
})

export const settingsReducer = settingsSlice.reducer
