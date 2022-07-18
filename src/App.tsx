import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {MainPage} from "./pages/MainPage";
import {AuthPage} from "./pages/AuthPage";
import {AirportDetailPage} from "./pages/AirportDetailPage";
import {Navigation} from "./components/Navigation";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";


function App() {
	return (
		<>
			<Header/>

			<Navigation/>
			<Routes>
				<Route path={"/"} element={<MainPage/>}/>
				<Route path={"/auth"} element={<AuthPage/>}/>
				<Route path={"/airport/:id"} element={<AirportDetailPage/>}/>

			</Routes>

			<Footer/>
		</>


	);
}

export default App;
