import {AppDispatch} from "../index";
import {handbookSlice} from "../slices/handbookSlice";
import axios from "../../axios";
import {IAirport, IAirportCountry, IAirportRegion, IAirportType} from "../../models/models";

//запрос к серверу
export const fetchHandbooks = () => {
	return async (dispatch: AppDispatch)=> {
		try {
			dispatch(handbookSlice.actions.fetching())
			const response = await Promise.all([
				axios.get<IAirportType[]>(`/handbooks/airport-types`),
				axios.get<IAirportRegion[]>(`/handbooks/regions`),
				axios.get<IAirportCountry[]>(`/handbooks/countries`)
			])
			console.log(`fetchHandbooks response`, response)

			// в инструментах разработчика в Redux теперь можно увидеть загруженный с сервера объект handbook массивов types, regions и countries
			dispatch(handbookSlice.actions.fetchSuccess({
				types: response[0].data,
				regions: response[1].data,
				countries: response[2].data
			}))

		} catch (e){

		}
	}

}
