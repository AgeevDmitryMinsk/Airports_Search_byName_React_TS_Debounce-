import React, {useEffect, useState} from 'react';


import {useInput} from "../hook/input";
import {useDebounce} from "../hook/useDebounce";
import axios from "../axios";
import {IAirport, ServerResponse} from "../models/models";
import {useNavigate} from "react-router-dom";


export const AirportSearch = () => {

	const navigate = useNavigate()

	//заменил строки 9-12 на кастомный hook useInput:
	const input = useInput(``)
	// const [value, setValue] = useState('')
	// function ChangeHandler(e:React.ChangeEvent<HTMLInputElement>) {
	// 	console.log(e.target.value)
	// 	setValue(e.target.value)
	// }

	const [airports, setAirports] = useState<IAirport[]>([])

	const debounced = useDebounce(input.value)

	async function searchAirports() {
		const response = await axios.get<ServerResponse<IAirport>>('airports', {
			params: {
				search: debounced,
				count: 10
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
		console.log(input.value)
	}, [debounced])

	return (
		<div className={"border mb-4 relative "}>
			search_Page
			<input type="text"
				   className={"border py-2 px-4 mb-4 outline-0 w-full h-[42px]"}
				   placeholder={"type something here..."}
				   {...input} />
			{/*// value={value}*/}
			{/*// onChange={ChangeHandler}*/}

			{(debounced.length >= 3) &&
                <ul className={'list-none absolute left-0 right-0 top-[64px] h-[200px] bg-white shadow-md overflow-y-scroll'}>
					{airports.map(el => (
						<li key={el.id}
							onClick={()=>navigate(`/airport/${el.id}`)}
							className={`py-2 px-4 mb-2 border 
					hover:bg-gray-500 
					hover:text-white 
					hover:transition-colors
					cursor-pointer`}>
							{el.name}
						</li>
					))}
                </ul>}
		</div>
	);
};


