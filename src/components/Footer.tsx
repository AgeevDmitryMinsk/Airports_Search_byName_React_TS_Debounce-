import React from 'react';
import AgeevDmitryMinsk_photo from './../photo/AgeevDmitryMinsk.jpg'


export const Footer = () => {

	return (
		< >
			<a href="https://github.com/AgeevDmitryMinsk" target={"_blank"}
			   className="sticky bottom-0 flex justify-between items-center h-[50px]
			   px-5 bg-gray-600 text-white shadow-md cursor-pointer
			   hover:transition-all hover:text-lg transition hover:duration-1000 hover:ease-in-out">
				AgeevDmitryMinsk 2022
				<img src={AgeevDmitryMinsk_photo} alt="AgeevDmitryMinsk_photo" className={"h-12 rounded" }/>
				<div>Viber/Telegram: +375 29 6164088</div>
			</a>
		</>
	);
};
