import {AppDispatch, RootState} from "../index";
import {authSlice} from "../slices/authSlice";
import axios from "../../axios";
import {authData, AuthServerResponse} from "../../models/models";
import {airportSlice} from "../slices/airportSlice";

export const fetchAuth = (data: authData) => {
	return async (dispatch: AppDispatch, getState: () => RootState ) => {
		// const {type, country, region} = getState().settings.filter
		try{
			const response = await axios.post<AuthServerResponse>('auth/register', data)
			console.log(response)

			dispatch(authSlice.actions.login({access: response.data.access,  username:data.username}))

			// dispatch(authSlice.actions.login({access:  }))
			// //загрузка началась:
			// dispatch(airportSlice.actions.fetching())
			//
			// // if(filter) {
			// // 	if (filter.type) {type = filter.type}
			// //
			// // 	if (filter.region) {region = filter.region}
			// //
			// // 	if (filter.country) {country = filter.country}
			// // }
			//
			// let  params: {page: number; count: number; type?: string; region?: string; country?: string} =  {page, count}
			// if (type) params = {...params, type}
			// if (region) params = {...params, region}
			// if (country) params = {...params, country}
			// //загружаю данные:
			// const response = await axios.get<ServerResponse<IAirport>>(`airports`, {params
			//
			// })
			// // const response = await axios.get<ServerResponse<IAirport>>(`airports?count=${count}&page=${page}`)
			// console.log(response.data)
			// //загрузка завершилась:
			// //добавил задержку для отображения спиннера 300 мСек
			// setTimeout(function delay() {
			// 	dispatch(airportSlice.actions.fetchSuccess({
			// 		airport: response.data.results,
			// 		count: response.data.count
			// 	}))
			// }, 3000)

		}catch (e: any){
			console.log('error', e)

			//если есть ошибка, то ловим ее, прописывая, что она типа Error:
			dispatch(authSlice.actions.fetchError(e.response.data.username[0]))

		}
	}
}

export const login = (data: authData) => {
	return async (dispatch: AppDispatch, getState: () => RootState ) => {
		// const {type, country, region} = getState().settings.filter
		try{
			const response = await axios.post<AuthServerResponse>('auth/login', data)
			console.log(response)

			dispatch(authSlice.actions.login({access: response.data.access,  username:data.username}))

			// dispatch(authSlice.actions.login({access:  }))
			// //загрузка началась:
			// dispatch(airportSlice.actions.fetching())
			//
			// // if(filter) {
			// // 	if (filter.type) {type = filter.type}
			// //
			// // 	if (filter.region) {region = filter.region}
			// //
			// // 	if (filter.country) {country = filter.country}
			// // }
			//
			// let  params: {page: number; count: number; type?: string; region?: string; country?: string} =  {page, count}
			// if (type) params = {...params, type}
			// if (region) params = {...params, region}
			// if (country) params = {...params, country}
			// //загружаю данные:
			// const response = await axios.get<ServerResponse<IAirport>>(`airports`, {params
			//
			// })
			// // const response = await axios.get<ServerResponse<IAirport>>(`airports?count=${count}&page=${page}`)
			// console.log(response.data)
			// //загрузка завершилась:
			// //добавил задержку для отображения спиннера 300 мСек
			// setTimeout(function delay() {
			// 	dispatch(airportSlice.actions.fetchSuccess({
			// 		airport: response.data.results,
			// 		count: response.data.count
			// 	}))
			// }, 3000)

		}catch (e: any){
			console.log('error', e)

			//если есть ошибка, то ловим ее, прописывая, что она типа Error:
			dispatch(authSlice.actions.fetchError(e.response.data.username[0]))

		}
	}
}
