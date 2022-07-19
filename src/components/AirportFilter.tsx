import React, {ChangeEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hook/redux";
import {IAirport, IFilter} from "../models/models";
import {fetchAirports} from "../store/actions/airportActions";
import {airportSlice} from "../store/slices/airportSlice";
import {ITEMS_PER_PAGE} from "../pages/MainPage";

export const AirportFilter = () => {

	const dispatch = useAppDispatch()


	//const [searchParams, setSearchParams] = useSearchParams()


	const {loading, countries, regions, types} = useAppSelector(state => state.handbook)
	const {country, region, type}= useAppSelector(state=> state.airport.myFilter)


	const [filter, setFilter] = useState<IFilter>({
		country: country, // имя должно совпадать с именем в поле <select name="country"> ниже - обязательно!
		region: region,
		type: type
	})

	function addMyFiler() {
		dispatch(airportSlice.actions.fetchMyFilter(filter))
	}

	//отслеживаю состояние задан ли фильтр для сортировки аэропортов
	const [hasFiltered, setHasFiltered] = useState(false)

	const isFilterEnabled = () => {
		return filter.region || filter.type || filter.country
	}

	const [page, setPage] = useState(1)

	//слежу за изменением фильтра
	useEffect(() => {
		if (isFilterEnabled()) {
			setHasFiltered(true)
		} else {
			setHasFiltered(false)
		}
		console.log(`inside AirportFilter useEffect`)
		dispatch(fetchAirports(page))
		dispatch(airportSlice.actions.fetchFilter(filter))
	}, [filter])

	// для общего запроса по type=small_airport&country=US, отображаемое кол-во 10:
	// http://docker.digital-spectr.ru:8888/api/airports?count=10&ordering=id&type=small_airport&country=US

	function changeHandler(event: ChangeEvent<HTMLSelectElement>) {
		console.log(event.target.value)
		setFilter(prev => ({...prev, [event.target.name]: event.target.value}))
		addMyFiler()
	}

	function clearFilter(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		setFilter({country: '', region: '', type: ''})
		dispatch(fetchAirports(page))
	}

	// const [airports, setAirports] = useState<IAirport[]>([])

	useEffect(() => {
		console.log(filter)

		if (isFilterEnabled()) {

			// if (filter.type !== '') {
			// 	dispatch(fetchAirports(page, 3, filter.type))
			// }
			//
			// if (filter.country !== '') {
			// 	dispatch(fetchAirports(page, 3, undefined, filter.country))
			// }
			//
			// if (filter.region !== '') {
			// 	dispatch(fetchAirports(page, 3, undefined, undefined, filter.region))
			// }
			dispatch(fetchAirports(page))

		}

	}, [dispatch, filter.type, filter.country, filter.region])


	return (
		<>
			{loading && <p className={"text-center text-4xl text-red-600"}>Filter is loading...</p>}

			<div className={"border py-2 px-4 mb-2"}>
				<span className={'font-bold'}>filters:</span>

				<select name="type"
						className={"px-4"}
						onChange={changeHandler}
						value={filter.type}
					//value={searchParams.get(filter.type) || ''}
				>
					<option value="" disabled>Type</option>
					{types.map(el => (
						<option key={el}>{el}</option>
					))}
				</select>


				<select name="country"
						className={"px-4"}
						onChange={changeHandler}
						value={filter.country}
					//value={searchParams.get(filter.country) || ''}
				>
					<option value="" disabled>Country</option>
					{countries.map(el => (
						<option key={el}>{el}</option>
					))}
				</select>


				<select name="region"
						className={"px-4"}
						onChange={changeHandler}
						value={filter.region}
					//value={searchParams.get(filter.region) || ''}
				>
					<option value="" disabled>Region</option>
					{regions.map(el => (
						<option key={el}>{el}</option>
					))}
				</select>

				{/*кнопка для зачистки полей select*/}
				{hasFiltered && <button onClick={clearFilter}
                                        className="py-1 px-2 bg-red-700 text-white ml-2 rounded">&times;</button>}
			</div>

		</>

	);
};


