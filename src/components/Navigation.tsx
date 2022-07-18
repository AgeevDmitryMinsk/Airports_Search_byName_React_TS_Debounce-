import React from 'react';
import {Link} from "react-router-dom";

export const Navigation = () => {
	return (
		<nav className={"flex justify-between items-center h-[50px] px-5 bg-gray-500 shadow-md text-white"}>

			<Link to={"/"}>Airport</Link>
			<Link to={"/auth"}>Auth</Link>

		</nav>
	);
};

