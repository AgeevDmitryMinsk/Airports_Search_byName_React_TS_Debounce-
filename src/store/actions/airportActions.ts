import axios from "../../axios";
import {AppDispatch, RootState} from "../index";
import {airportSlice} from "../slices/airportSlice";

import {IAirport, IFilter, ServerResponse} from "../../models/models";

//запрос к серверу
// export const fetchAirports = (page = 1, count = 3) => {
// 	return async (dispatch: AppDispatch) =>{
// 		try{
// 			//загрузка началась:
// 			dispatch(airportSlice.actions.fetching())
// 			//загружаю данные:
// 			const response = await axios.get<ServerResponse<IAirport>>(`airports`, {
// 				params: {
// 					page,
// 					count
// 				}
// 			})
// 			// const response = await axios.get<ServerResponse<IAirport>>(`airports?count=${count}&page=${page}`)
// 			console.log(response.data)
// 			//загрузка завершилась:
// 			dispatch(airportSlice.actions.fetchSuccess({
// 				airport: response.data.results,
// 				count: response.data.count
// 			}))
//
// 		}catch (e){
// 			//если есть ошибка, то ловим ее, прописывая, что она типа Error:
// 			dispatch(airportSlice.actions.fetchError(e as Error ))
//
//
// 		}
// 	}
//
// }

export const fetchAirportsWithFilter = (page = 1, count = 3, filter?: IFilter) => {
	return async (dispatch: AppDispatch, getState: () => RootState ) => {
		const {type, country, region, continent, municipality} = getState().settings.filter
		try{
			//загрузка началась:
			dispatch(airportSlice.actions.fetching())

			// if(filter) {
			// 	if (filter.type) {type = filter.type}
			//
			// 	if (filter.region) {region = filter.region}
			//
			// 	if (filter.country) {country = filter.country}
			// }

			let  params: {page: number;
				count: number;
				type?: string;
				region?: string;
				country?: string;
				continent?: string;
				municipality?: string
			} =  {page, count}

			if (type) params = {...params, type}
			if (region) params = {...params, region}
			if (country) params = {...params, country}
			if (continent) params = {...params, continent}
			if (municipality) params = {...params, municipality}

			//загружаю данные:
			const response = await axios.get<ServerResponse<IAirport>>(`airports`, {params

			})
			// const response = await axios.get<ServerResponse<IAirport>>(`airports?count=${count}&page=${page}`)
			console.log('fetchAirportsWithFilter response.data', response.data)
			//загрузка завершилась:
			//добавил задержку для отображения спиннера 300 мСек
			setTimeout(function delay() {
				dispatch(airportSlice.actions.fetchSuccess({
					airport: response.data.results,
					count: response.data.count
				}))
			}, 3000)





		}catch (e){
			//если есть ошибка, то ловим ее, прописывая, что она типа Error:
			dispatch(airportSlice.actions.fetchError(e as Error ))


		}
	}

}
