import {AppDispatch} from "../index";
import {handbookSlice} from "../slices/handbookSlice";
import axios from "../../axios";
import {
	IAirportContinent,
	IAirportCountry,
	IAirportMunicipality,
	IAirportRegion,
	IAirportType
} from "../../models/models";

//запрос к серверу
export const fetchHandbooks = () => {
	return async (dispatch: AppDispatch)=> {
		try {
			dispatch(handbookSlice.actions.fetching())
			const response = await Promise.all([
				axios.get<IAirportType[]>(`/handbooks/airport-types`),
				axios.get<IAirportRegion[]>(`/handbooks/regions`),
				axios.get<IAirportCountry[]>(`/handbooks/countries`),
				axios.get<IAirportContinent[]>(`/handbooks/continents`),
				axios.get<IAirportMunicipality[]>(`/handbooks/municipalities`),
			])
			console.log(`fetchHandbooks response`, response)

			// в инструментах разработчика в Redux теперь можно увидеть загруженный с сервера объект handbook массивов types, regions и countries
			//сделал задержку для отображения спиннера 300 мСек
			setTimeout(function delay() {
				dispatch(handbookSlice.actions.fetchSuccess({
					types: response[0].data,
					regions: response[1].data,
					countries: response[2].data,
					continents: response[3].data,
					municipalities: response[4].data
				}))
			}, 300)

		} catch (e){

		}
	}

}
