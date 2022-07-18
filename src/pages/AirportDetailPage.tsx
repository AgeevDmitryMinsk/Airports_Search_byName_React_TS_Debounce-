import React from 'react';
import {useParams} from "react-router-dom";

export const AirportDetailPage = () => {

	//беру данные из адресной строки благодаря хуку useParams():
	const params = useParams<'id'>()
	console.log(params)

	return (
		<div className={"flex-col justify-center pt-10 mx-auto h-screen w-screen overflow-y-scroll max-w-[720px]"}>
			Airport_Detail_Page:
			<div>{params.id}</div>
		</div>
	);
};

