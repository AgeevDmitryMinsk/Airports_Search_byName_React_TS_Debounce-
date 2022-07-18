import React from 'react';
import {IAirport} from "../models/models";
import {useNavigate} from "react-router-dom";

interface AirportCardProps {
	airport: IAirport
}

export const AirportCard = ({airport}: AirportCardProps) => {

	//благодаря хуку useNavigate делаю переброс пользователя на новый адрес в адресной строке: /airport/${airport.id}
	const navigate = useNavigate()

	function clickHandler() {
		navigate(`/airport/${airport.id}`)
	}

	return (


		<div className={`border rounded py-4 px-6 mb-4 hover:shadow-md
								hover:transition-all hover:scale-105 cursor-pointer`}
			 onClick={clickHandler}>
			<p className={"text-lg font-bold"}>{airport.name}</p>
			<p className={"text-sm"}>{airport.region}</p>
			{airport.type === 'closed'
				? <p className={"text-sm text-red-500 font-bold"}>{airport.type}</p>
				: <p className={"text-sm"}>{airport.type}</p>}
		</div>



		// отсортировка если airport.type !== 'closed'
		// <>
		// 	{(airport.type !== 'closed') && (
		// 		<div className={`border rounded py-4 px-6 mb-4 hover:shadow-md
		// 						hover:transition-all hover:scale-105 cursor-pointer`}>
		// 			<p className={"text-lg font-bold"}>{airport.name}</p>
		// 			<p className={"text-sm"}>{airport.region}</p>
		// 			<p className={"text-sm"}>{airport.type}</p>
		// 		</div>) }
		// </>


	);
};

