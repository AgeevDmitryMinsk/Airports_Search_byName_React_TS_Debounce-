import React, {ChangeEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hook/redux";
import {setFilterCountry, setFilterItemsPerPage, setFilterRegion, setFilterType} from "../store/slices/settingsSlice";
import {TEMS_PER_PAGE_Type} from "../models/models";

export const AirportFilter = () => {

	const dispatch = useAppDispatch()

	let items_per_page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	const {loading, countries, regions, types} = useAppSelector(state => state.handbook)
	const filter = useAppSelector(state => state.settings.filter)
	console.log(filter)

	// const [filter, setFilter] = useState<IFilter>({
	// 	country: '', // имя должно совпадать с именем в поле <select name="country"> ниже - обязательно!
	// 	region: '',
	// 	type: ''
	// })

	//отслеживаю состояние задан ли фильтр для сортировки аэропортов
	const [hasFiltered, setHasFiltered] = useState(false)

	// const isFilterEnabled = () => {
	// 	return filter.region || filter.type || filter.country
	// }	//console.log(isFilterEnabled())

	//слежу за изменением фильтра
	// useEffect(() => {
	// 	if (isFilterEnabled()) {
	// 		setHasFiltered(true)
	// 	} else {
	// 		setHasFiltered(false)
	// 	}
	// 	dispatch(fetchAirportsWithFilter(1, 3, filter ))
	// 	//dispatch(airportSlice.actions.fetchFilter(filter))
	// 	//console.log('filter in useEffect=', filter) // filter in useEffect= {country: '', region: '', type: 'closed'}
	// }, [filter])

	function changeHandler(event: ChangeEvent<HTMLSelectElement>) {
		console.log(`event.target.value =`, event.target.value)
		if(event.target.name === 'type') {
			dispatch(setFilterType(event.target.value))
			setHasFiltered(true)
		}
		if(event.target.name === 'region') {
			dispatch(setFilterRegion(event.target.value))
			setHasFiltered(true)
		}
		if(event.target.name === 'country') {
			dispatch(setFilterCountry(event.target.value))
			setHasFiltered(true)
		}

		if(event.target.name === 'items_per_page') {
			dispatch(setFilterItemsPerPage(Number(event.target.value)))
		}
	}

	function clearFilter() {
		dispatch(setFilterCountry(''))
		dispatch(setFilterType(''))
		dispatch(setFilterRegion(''))
		setHasFiltered(false)
	}

	return (
		<>
			{loading && <p className={"text-center text-4xl text-red-600"}>Filter is loading...</p>}

			<div className={"border py-2 px-4 mb-2"}>
				<span className={'font-bold'}>filters:</span>

				<select name="type"
						className={"ml-4 px-4 max-w-[110px]"}
						onChange={changeHandler}
						value={filter.type}
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
				>
					<option value="" disabled>Country</option>
					{countries.map(el => (
						<option key={el}>{el}</option>
					))}
				</select>


				<select name="region"
						className={"px-4 mr-4"}
						onChange={changeHandler}
						value={filter.region}
				>
					<option value="" disabled>Region</option>
					{regions.map(el => (
						<option key={el}>{el}</option>
					))}
				</select>

				<b>Items</b>
				<select name="items_per_page"
						className={"px-4 max-w-[70px] text-red-600 font-bold border rounded"}
						onChange={changeHandler}
						value={filter.items_per_page}
				>
					<option value=""  disabled>Items_Per_Page</option>
					{items_per_page.map(el => (
						<option key={el} className={'text-center'}>{el}</option>
					))}
				</select>
				<b>per page</b>


				{/*кнопка для зачистки полей select*/}
				{hasFiltered && <button onClick={clearFilter}
                                        className="py-1 px-2 bg-red-700 text-white ml-2 rounded">&times;</button>}
			</div>

		</>

	);
};


