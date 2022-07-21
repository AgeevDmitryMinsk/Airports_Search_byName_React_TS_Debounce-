import React, {useEffect, useState} from 'react';
import {AirportSearch} from "../components/AirportSearch";
import {AirportFilter} from "../components/AirportFilter";
import {AirportCard} from "../components/AirportCard";
import {fetchAirportsWithFilter} from "../store/actions/airportActions";
import {useAppDispatch, useAppSelector} from "../hook/redux";
//для пагинации использую библиотеку react-paginate
import ReactPaginate from 'react-paginate';
import Modal from "../components/Modal";
import './mainstyle.scss'


// буду выводить 3 элементов-карточек аэропортов на странице
//const ITEMS_PER_PAGE = 3

export const MainPage = () => {
	const {airport, error, loading, count} = useAppSelector(state => state.airport)
	const type = useAppSelector(state => state.settings.filter.type)
	const region = useAppSelector(state => state.settings.filter.region)
	const country = useAppSelector(state => state.settings.filter.country)
	const item_per_page = useAppSelector(state => state.settings.filter.items_per_page)


	const pageCount = Math.ceil(count / item_per_page)

	const [page, setPage] = useState(1)

	const dispatch = useAppDispatch()

	useEffect(() => {

		dispatch(fetchAirportsWithFilter(page, item_per_page))

	}, [dispatch, page, type, country, region, item_per_page])

	function pageChangeHandler({selected}: { selected: number }) {
		// console.log(selected)
		setPage(selected + 1)
		console.log(selected + 1)
	}

	console.log(`loading in MainPage`, loading)

	return (

		<div className={'mt-28 mx-auto min-h-screen w-screen  max-w-[780px]'}>
			<div className="mockup-code border bg-gray-800 relative">

				{/*main_Page*/}
				<AirportSearch/>
				<AirportFilter/>

				{/*{loading &&*/}
				{/*    <progress*/}
				{/*        className="absolute top-80 ml-64 progress w-56 bg-primary text-center text-4xl text-accent"/>*/}
				{/*}*/}
				{loading &&
                    <div className={'h-[100px] '}>
                        <div className="content bg-primary bg-transparent">
                            <svg version="1.1" id="airplane-loader" xmlns="http://www.w3.org/2000/svg" width="144" fill='fuchsia'
                                 height="48" viewBox="0 0 144 48">
                                <path id="airplane-take-off"  fill='fuchsia'
                                      d="M59.124,34L56,29h-4l2.947,11H89c1.657,0,3-1.343,3-3s-1.343-3-3-3H78.998L69,18h-4l4.287,16H59.124z"/>
                                <rect id="ground" x="52" y="44" fill="#fuchsia" width="40" height="4"/>
                            </svg>
                            <svg version="1.1" id="airplane-loader" xmlns="http://www.w3.org/2000/svg" width="144"
                                 height="48" viewBox="0 0 144 48">
                                <path id="airplane-landing" fill="fuchsia"
                                      d="M59.124,34L56,29h-4l2.947,11H89c1.657,0,3-1.343,3-3s-1.343-3-3-3H78.998L69,18h-4l4.287,16H59.124z"/>
                                <rect id="ground" x="52" y="44" fill="fuchsia" width="40" height="4"/>
                            </svg>
                        </div>

                    </div>
				}



				{error && <p className={"text-center text-4xl text-red-600"}>{error}</p>}


				{((airport.length > 0) || (loading === true))
					? airport.map(el => <AirportCard key={el.id} airport={el}/>)
					: (
						<>
							<div className={'flex justify-center text-red-600 font-bold'}>
								No such airport found!
							</div>

							<div className={'flex justify-center text-red-600 font-bold'}>
								Please, try to set other filter parameters next time
							</div>
						</>)

				}


				{/*делаю пагинацию загрженных с сервера страниц*/}

				{(pageCount > 0) && <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={pageChangeHandler}
                    pageRangeDisplayed={5}
					// marginPagesDisplayed = {10}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    previousClassName={"px-2 mr-4 border badge badge-secondary badge-outline hover:bg-primary"}
                    nextLinkClassName={"px-2 ml-4 border badge badge-secondary badge-outline hover:bg-primary"}
                    pageClassName={"px-2 mr-1 border badge badge-secondary badge-outline hover:bg-primary"}
                    containerClassName={"flex my-10 ml-16"}
                    activeClassName={"font-bold badge badge-primary badge-outline"}
                    breakClassName="px-2 mr-1 border badge badge-secondary badge-outline"

                />}

				{/*<Test/> - deleted in project */}
				<Modal/>

			</div>


		</div>
	);
};

//loading
