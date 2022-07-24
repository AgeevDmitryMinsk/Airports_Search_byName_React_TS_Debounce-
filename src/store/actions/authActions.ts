import {AppDispatch, RootState} from "../index";
import {authSlice} from "../slices/authSlice";
import axios from "../../axios";
import {authData, AuthServerResponse} from "../../models/models";

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
			console.log(42, `response = `, response)

			dispatch(authSlice.actions.login({access: response.data.access, username: data.username}))

			//добавил задержку для отображения спиннера 300 мСек
			// setTimeout(function delay() {
			// 	dispatch(authSlice.actions.login({access: response.data.access, username: data.username}))
			// }, 3000)


		} catch (e: any) {
			console.log('error', e)

			//если есть ошибка, то ловим ее, прописывая, что она типа Error:
			dispatch(authSlice.actions.fetchError(e.response.data.detail))

		}
	}
}
