import React from 'react';
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hook/redux";
import {authSlice} from "../store/slices/authSlice";

export const Navigation = () => {
	const {isAuth, username}= useAppSelector(state => state.auth)
	const dispatch = useAppDispatch()


	function logoutHandler(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {

		//чтобы не добавлялись хеши в адрес
		event.preventDefault()

		dispatch(authSlice.actions.logout())


	}

	return (
		<nav className={"flex justify-between items-center h-[50px] px-5 bg-gray-500 shadow-md text-white"}>

			<Link to={"/"}>Airport</Link>
			{!isAuth && <Link to={"/auth"}>Auth</Link>}
			{isAuth && <>
				<span className='font-bold border p-1 rounded mr-12' >{username}</span>
                <a href="#" onClick={logoutHandler} className='border p-1 rounded'>Log Out</a>
			</>}

		</nav>
	);
};

