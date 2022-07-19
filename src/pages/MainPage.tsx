import React, {useEffect, useState} from 'react';
import {AirportSearch} from "../components/AirportSearch";
import {AirportFilter} from "../components/AirportFilter";
import {AirportCard} from "../components/AirportCard";
import {fetchAirports} from "../store/actions/airportActions";
import {useAppDispatch, useAppSelector} from "../hook/redux";
//для пагинации использую библиотеку react-paginate
import ReactPaginate from 'react-paginate';
import {useParams, useSearchParams} from "react-router-dom";
import {airportAction} from "../store/slices/airportSlice";

// буду выводить 50 элементов-карточек аэропортов на странице
export const ITEMS_PER_PAGE = 3

export const MainPage = () => {
	const {airport, error, loading, count, myFilter} = useAppSelector(state => state.airport)
	const {type, country, region} = useAppSelector(state => state.airport.myFilter)

	// const {type,country, region	} = myFilter
	//console.log('type, country, region = ', type, country, region)

	//количество загруженных страниц
	const pageCount = Math.ceil(count / ITEMS_PER_PAGE)
	//const [page, setPage] = useState(1)

	const dispatch = useAppDispatch()

	// useEffect(() => {
	// 	// if (type) {
	// 	// 	dispatch(fetchAirports(page, ITEMS_PER_PAGE, type))
	// 	// } else if (country) {
	// 	// 	dispatch(fetchAirports(page, ITEMS_PER_PAGE, undefined, country))
	// 	// } else if (region) {
	// 	// 	dispatch(fetchAirports(page, ITEMS_PER_PAGE, undefined, undefined, region))
	// 	// } else dispatch(fetchAirports(page, ITEMS_PER_PAGE,))
	// 	dispatch(fetchAirports(page))
	// 	console.log(page)
	//
	// }, [dispatch, page,])

	function pageChangeHandler({selected}: { selected: number }) {
		// console.log(selected)
		// setPage(selected + 1)
		// dispatch(airportAction.setCurrentPage(selected + 1))
		dispatch(fetchAirports(selected + 1))
		console.log(selected + 1)
	}

	return (
		// <div className={'container  pt-10 mx-auto max-w-[760px] h-screen w-screen'}>
		// 	<div className={'flex-col justify-center align-middle pt-10 mx-auto h-screen w-screen'}>
		<div className={'flex-col justify-center pt-10 mx-auto h-screen w-screen overflow-y-scroll max-w-[760px]'}>


			{/*flex justify-center pt-10 mx-auto h-screen w-screen overflow-y-scroll*/}
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

