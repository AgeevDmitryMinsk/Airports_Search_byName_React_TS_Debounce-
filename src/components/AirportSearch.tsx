import React, {useEffect, useState} from 'react';


//import {useInput} from "../hook/input";
import {useDebounce} from "../hook/useDebounce";
import axios from "../axios";
import {IAirport, ServerResponse} from "../models/models";
import {useNavigate} from "react-router-dom";


export const AirportSearch = () => {

	const navigate = useNavigate()

	//заменил строки 9-12 на кастомный hook useInput:
	//const input = useInput(``)
	const [value, setValue] = useState('')
	function ChangeHandler(e:React.ChangeEvent<HTMLInputElement>) {
		//console.log(e.target.value)
		setValue(e.target.value)
	}

	const [airports, setAirports] = useState<IAirport[]>([])

	const debounced = useDebounce(value)

	async function searchAirports() {
		const response = await axios.get<ServerResponse<IAirport>>('airports', {
			params: {
				search: debounced,
				count: 1000
			}
		})
		setAirports(response.data.results)
		console.log(response.data)
	}

	useEffect(() => {

		if (debounced.length >= 3) {
			//request
			searchAirports()
		}
		console.log(`debounced = `, debounced)
	}, [debounced])

	let InputClassName = (airports.length > 0) ? "border outline-0 w-full p-4 ml-1 input input-bordered input-success max-w-xs hover:bg-primary" :
		"border outline-0 w-full input input-bordered input-secondary max-w-xs p-4 ml-1 hover:bg-primary"

	return (
		<div className="border relative p-3 m-2 rounded" onMouseLeave={() => setValue('')}>
		{/*<div className={"border relative p-3"} >*/}
			{/*search_Page. */}
			<span className='font-bold p-1.5'>Please, enter your favourite Airport:</span>
			<div className="form-control relative">
				<div className="input-group mb-6">
					<input type="text"
						   className={InputClassName}
						   placeholder={"type something here..."}
						   onChange={ChangeHandler}
						   value={value}
					/>

						   {/*{...input} />*/}

					<button
						className={(airports.length > 0) ? "btn btn-square input-success" : "btn btn-square input-secondary"}>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
							 stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
						</svg>
					</button>
				</div>
				{(debounced.length >= 3) && (airports.length === 0) && <div className={'text-red-600 top-12 absolute'}> please enter the correct airport name for the request</div>}
			</div>

			{(debounced.length >= 3) && (airports.length > 0) &&
                <ul className={`list-none absolute top-20 left-6 mt-1 w-[312px] max-h-screen bg-white shadow-md overflow-y-scroll`}>
					{airports.map(el => (
						<li key={el.id}
							onClick={() => navigate(`/airport/${el.id}`)}
							className={`py-2 px-4 border
										input		
										input-bordered					
										hover:bg-blue-500
										hover:text-white
										hover:transition-colors
										text-center
										h-[60px]
										cursor-pointer`}>
							{el.name}
						</li>
					))}
                </ul>}
		</div>
	);
};


