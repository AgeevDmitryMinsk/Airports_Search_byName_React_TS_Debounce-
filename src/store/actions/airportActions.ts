import axios from "../../axios";
import {AppDispatch, RootState} from "../index";
import {airportSlice} from "../slices/airportSlice";

import {IAirport, ServerResponse} from "../../models/models";
import {createAsyncThunk} from "@reduxjs/toolkit";
//createAsyncThunk()

//запрос к серверу через thunk
export const fetchAirports = (page: number) => {
	//если нужен квери-параметр type=`small_airport`, то добавляю:
	// export const fetchAirports = (page = 1, count = 50, type=`small_airport`) => {
	return async (dispatch: AppDispatch, getState: () => RootState ) =>{
		try{
			//загрузка началась:
			dispatch(airportSlice.actions.fetching())
			//загружаю данные:
			// const params = getState().airport.params
			const params = {page, count: 3}
			const response = await axios.get<ServerResponse<IAirport>>(`airports`, {
				params
			})
			// const response = await axios.get<ServerResponse<IAirport>>(`airports?count=${count}&page=${page}`)
			console.log(`fetchAirports response.data`, response.data)
			//загрузка завершилась успешно:
			dispatch(airportSlice.actions.fetchSuccess({
				airport: response.data.results,
				count: response.data.count
			}))

		}catch (e){
			//если есть ошибка, то ловим ее, прописывая, что она типа Error:
			dispatch(airportSlice.actions.fetchError(e as Error ))


		}
	}

}
