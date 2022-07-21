import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "../axios";
import {IAirportDetails} from "../models/models";

export const AirportDetailPage = () => {

	//беру данные из адресной строки благодаря хуку useParams():
	const params = useParams<'id'>()
	console.log(params)

	const [airportDetail, setAirportDetail] = useState<IAirportDetails | null>(null)

	useEffect(() => {
		getAirportDetails()
	}, [])

	async function getAirportDetails() {
		try {
			const response = await axios.get<IAirportDetails>(`/airports/${params.id}`)
			console.log(`response=`, response.data.name)
			setAirportDetail(response.data)
		} catch (err) {
			console.log(err)
		}

	}

	//console.log(airportDetail?.type)
	let airportDetailClass = airportDetail?.type === 'closed' ? `text-red-600` : `text-blue-500`

	return (


		<div className={'flex-col pt-20 m-auto min-h-screen w-screen max-w-[460px]'}>
			{/*Airport_Detail_Page:*/}
			{/*<div>{params.id}</div>*/}
			<div className="mockup-phone border-secondary-content/1">
				<div className="camera"/>
				<div className="display">
					<div className="artboard artboard-demo phone-1 bg-primary">

						<div className={'font-bold'}>{airportDetail?.name}</div>
						{(airportDetail?.continent) && <div>Continent: {airportDetail?.continent}</div>}
						{(airportDetail?.region) && <div>Region-code:{airportDetail?.region}</div>}
						{(airportDetail?.country) && <div>Country: {airportDetail?.country}</div>}
						{(airportDetail?.gps_code) && <div> gps_code: {airportDetail?.gps_code}</div>}

						{(airportDetail?.type) &&
                            <div>Type: <span className={airportDetailClass}>{airportDetail?.type}</span></div>}

						{(airportDetail?.coordinates) &&
                            <div className={`text-sm pt-1 text-center`}>Coordinates: {airportDetail?.coordinates}</div>}


					</div>
				</div>
			</div>
		</div>


	);
};

