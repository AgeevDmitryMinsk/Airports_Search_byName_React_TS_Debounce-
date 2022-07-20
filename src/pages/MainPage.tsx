import React, {useEffect, useState} from 'react';
import {AirportSearch} from "../components/AirportSearch";
import {AirportFilter} from "../components/AirportFilter";
import {AirportCard} from "../components/AirportCard";
import {fetchAirportsWithFilter} from "../store/actions/airportActions";
import {useAppDispatch, useAppSelector} from "../hook/redux";
//для пагинации использую библиотеку react-paginate
import ReactPaginate from 'react-paginate';

// буду выводить 50 элементов-карточек аэропортов на странице
const ITEMS_PER_PAGE = 3

export const MainPage = () => {
	const {airport, error, loading, count} = useAppSelector(state => state.airport)
	const type = useAppSelector(state => state.settings.filter.type)
	const region = useAppSelector(state => state.settings.filter.region)
	const country = useAppSelector(state => state.settings.filter.country)

	//количество загруженных страниц
	const pageCount = Math.ceil(count / ITEMS_PER_PAGE)
	const [page, setPage] = useState(1)

	const dispatch = useAppDispatch()

	useEffect(() => {
		//dispatch(fetchAirports(page, ITEMS_PER_PAGE))
		dispatch(fetchAirportsWithFilter(page, ITEMS_PER_PAGE))

	}, [dispatch, page, type, country, region])

	function pageChangeHandler({selected}: { selected: number }) {
		// console.log(selected)
		setPage(selected + 1)
		console.log(selected + 1)
	}

	return (

		<div className={'flex-col justify-center pt-10 mx-auto h-screen w-screen overflow-y-scroll max-w-[760px]'}>


			main
			<AirportSearch/>
			<AirportFilter/>

			{loading && <p className={"text-center text-4xl"}>Loading...</p>}
			{error && <p className={"text-center text-4xl text-red-600"}>{error}</p>}


			{airport.map(el => <AirportCard key={el.id} airport={el}/>)}


			{/*делаю пагинацию загрженных с сервера страниц*/}

			{pageCount && <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={pageChangeHandler}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                previousClassName={"px-2 mr-1 border"}
                nextLinkClassName={"px-2  border"}
                pageClassName={"px-2 mr-1 border"}
                containerClassName={"flex my-10"}
                activeClassName={"font-bold"}
                breakClassName="px-2 mr-1 border"

            />}

		</div>
	);
};

