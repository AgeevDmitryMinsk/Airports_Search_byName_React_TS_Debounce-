import React, {useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {MainPage} from "./pages/MainPage";
import {AuthPage} from "./pages/AuthPage";
import {AirportDetailPage} from "./pages/AirportDetailPage";
import {Navigation} from "./components/Navigation";
import {Footer} from "./components/Footer";
import {useAppDispatch, useAppSelector} from "./hook/redux";
import {fetchHandbooks} from "./store/actions/handbookActions";


function App() {

	const dispatch = useAppDispatch()
	const isAuth = useAppSelector(state => state.auth.isAuth)

	console.log(`isAuth = `, isAuth)


	useEffect(() => {
		dispatch(fetchHandbooks())
		console.log('dispatch(fetchHandbooks()) загрузка всех возможных вариантов фильтров')

	}, [dispatch])

	if (isAuth == false) {
		return (
			<>
				<div  className="fixed overflow-hidden top-0 w-screen h-screen left-0 bg-no-repeat bg-cover bg-[url('./photo/7gKg.gif')]">
					<AuthPage/>
				</div>
			</>

		)
	} else {
		return (
			<div className='h-screen'>
				<div
					className="fixed overflow-hidden top-0 w-screen h-screen left-0 bg-no-repeat bg-cover bg-[url('./photo/JFk2.gif')] react-spinner-loader-svg-calLoader">


					{/*<Header/>*/}

					<Navigation/>
					<Routes>
						<Route path={"/"} element={<MainPage/>}/>
						<Route path={"/auth"} element={<AuthPage/>}/>
						<Route path={"/airport/:id"} element={<AirportDetailPage/>}/>

					</Routes>


					<Footer/>
				</div>
				// </div>


		);
	}

}

export default App;

// load
