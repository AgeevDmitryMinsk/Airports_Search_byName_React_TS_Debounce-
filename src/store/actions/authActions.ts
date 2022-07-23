import {AppDispatch, RootState} from "../index";
import {authSlice} from "../slices/authSlice";
import axios from "../../axios";
import {authData, AuthServerResponse} from "../../models/models";
import {airportSlice} from "../slices/airportSlice";

export const fetchAuthRegister = (data: authData) => {
	return async (dispatch: AppDispatch, getState: () => RootState) => {
		// const {type, country, region} = getState().settings.filter
		try {
			dispatch(authSlice.actions.fetchingAuthLoading())

			const response = await axios.post<AuthServerResponse>('auth/register', data)
			console.log(response)

			//добавил задержку для отображения спиннера 300 мСек
			setTimeout(function delay() {
				dispatch(authSlice.actions.login({access: response.data.access, username: data.username}))
			}, 3000)


		} catch (e: any) {
			console.log('error', e)

			//если есть ошибка, то ловим ее, прописывая, что она типа Error:
			//добавил задержку для отображения спиннера 300 мСек
			setTimeout(function delay() {
				dispatch(authSlice.actions.fetchError(e.response.data.username[0]))
			}, 2000)


		}
	}
}

export const fetchAuthLogin = (data: authData) => {
	return async (dispatch: AppDispatch, getState: () => RootState) => {
		// const {type, country, region} = getState().settings.filter
		try {
			dispatch(authSlice.actions.fetchingAuthLoading())

			const response = await axios.post<AuthServerResponse>('auth/login', data)
			console.log(response)

			//добавил задержку для отображения спиннера 300 мСек
			setTimeout(function delay() {
				dispatch(authSlice.actions.login({access: response.data.access, username: data.username}))
			}, 3000)

			// dispatch(authSlice.actions.fetchAuthLogin({access:  }))
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

		} catch (e: any) {
			console.log('error', e)

			//если есть ошибка, то ловим ее, прописывая, что она типа Error:
			dispatch(authSlice.actions.fetchError(e.response.data.username[0]))

		}
	}
}
