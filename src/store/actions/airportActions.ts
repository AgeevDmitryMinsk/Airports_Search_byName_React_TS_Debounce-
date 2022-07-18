import axios from "../../axios";
import {AppDispatch} from "../index";
import {airportSlice} from "../slices/airportSlice";

import {IAirport, ServerResponse} from "../../models/models";

//запрос к серверу
export const fetchAirports = (page = 1, count = 50) => {
	return async (dispatch: AppDispatch) =>{
		try{
			//загрузка началась:
			dispatch(airportSlice.actions.fetching())
			//загружаю данные:
			const response = await axios.get<ServerResponse<IAirport>>(`airports`, {
				params: {
					page,
					count
				}
			})
			// const response = await axios.get<ServerResponse<IAirport>>(`airports?count=${count}&page=${page}`)
			console.log(response.data)
			//загрузка завершилась:
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
