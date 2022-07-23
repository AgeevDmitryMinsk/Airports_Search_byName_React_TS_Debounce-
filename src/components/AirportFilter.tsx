import React, {ChangeEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hook/redux";
import {
	setFilterContinent,
	setFilterCountry,
	setFilterItemsPerPage, setFilterMunicipality,
	setFilterRegion,
	setFilterType
} from "../store/slices/settingsSlice";

export const AirportFilter = () => {

	const dispatch = useAppDispatch()

	let items_per_page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	const {loading, countries, regions, types, continents, municipalities} = useAppSelector(state => state.handbook)
	const filter = useAppSelector(state => state.settings.filter)
	console.log(filter)

	//отслеживаю состояние задан ли фильтр для сортировки аэропортов
	const [hasFiltered, setHasFiltered] = useState(false)


	function changeHandler(event: ChangeEvent<HTMLSelectElement>) {
		console.log(`event.target.value =`, event.target.value)
		if (event.target.name === 'type') {
			dispatch(setFilterType(event.target.value))
			setHasFiltered(true)
		}
		if (event.target.name === 'region') {
			dispatch(setFilterRegion(event.target.value))
			setHasFiltered(true)
		}
		if (event.target.name === 'country') {
			dispatch(setFilterCountry(event.target.value))
			setHasFiltered(true)
		}

		if (event.target.name === 'continent') {
			dispatch(setFilterContinent(event.target.value))
			setHasFiltered(true)
		}

		if (event.target.name === 'municipality') {
			dispatch(setFilterMunicipality(event.target.value))
			setHasFiltered(true)
		}

		if (event.target.name === 'items_per_page') {
			dispatch(setFilterItemsPerPage(Number(event.target.value)))
		}
	}

	function clearFilter() {
		dispatch(setFilterCountry(''))
		dispatch(setFilterType(''))
		dispatch(setFilterRegion(''))
		dispatch(setFilterContinent(''))
		dispatch(setFilterMunicipality(''))
		setHasFiltered(false)
	}

	console.log(`loading=`, loading)

	return (
		<>

			{loading &&
				<progress
				    className="absolute top-80 ml-64 progress w-56 bg-primary text-center text-4xl text-accent"/>
			}


			<div className={"border py-2 px-4 m-2 rounded"}>
				<span className='font-bold p-1'>Airport filters:</span>

				<select name="municipality"
						className={"ml-4 px-4 max-w-[110px] select select-secondary hover:bg-primary"}
						onChange={changeHandler}
						value={filter.municipality}
				>
					<option value="" disabled className={'bg-gray-800'}>City</option>
					{municipalities.map(el => (
						<option key={el} className={'bg-gray-700'}>{el}</option>
					))}
				</select>

				<select name="type"
						className={"ml-4 px-4 max-w-[110px] select select-secondary hover:bg-primary"}
						onChange={changeHandler}
						value={filter.type}
				>
					<option value="" disabled className={'bg-gray-800'}>Type</option>
					{types.map(el => (
						<option key={el} className={'bg-gray-700'}>{el}</option>
					))}
				</select>


				<select name="country"
						className={"ml-4 px-4 max-w-[110px] select select-secondary hover:bg-primary"}
						onChange={changeHandler}
						value={filter.country}
				>
					<option value="" disabled className={'bg-gray-800'}>Country</option>
					{countries.map(el => (
						<option key={el} className={'bg-gray-700'}>{el}</option>
					))}
				</select>


				<select name="region"
						className={"ml-4 px-4 max-w-[110px] select select-secondary hover:bg-primary"}
						onChange={changeHandler}
						value={filter.region}
				>
					<option value="" disabled className={'bg-gray-800'}>Region</option>
					{regions.map(el => (
						<option key={el} className={'bg-gray-700'}>{el}</option>
					))}
				</select>

				<select name="continent"
						className={"ml-4 mr-4 px-4 max-w-[110px] select select-secondary hover:bg-primary"}
						onChange={changeHandler}
						value={filter.continent}
				>
					<option value="" disabled className={'bg-gray-800'}>Continent</option>
					{continents.map(el => (
						<option key={el} className={'bg-gray-700'}>{el}</option>
					))}
				</select>


				<b className='ml-20'>Items:</b>
				<select name="items_per_page"
						className={"ml-2 mr-2 mt-6 px-4 max-w-[70px] select select-accent hover:bg-primary"}
						onChange={changeHandler}
						value={filter.items_per_page}
				>
					<option value="" disabled className={'bg-gray-800'}>Items_Per_Page</option>
					{items_per_page.map(el => (
						<option key={el} className={'text-center bg-gray-700'}>{el}</option>
					))}
				</select>
				<b>per page</b>


				{/*кнопка для зачистки полей select*/}
				{hasFiltered && <button onClick={clearFilter}
                                        className="py-0.5 px-2 bg-fuchsia-600 text-white ml-2 rounded">&times;</button>}
			</div>
		</>

	);
};


