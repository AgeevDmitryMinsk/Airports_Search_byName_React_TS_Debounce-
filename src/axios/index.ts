import axios from "axios";

//console.log(process.env.REACT_APP_BASE_URL) // undefined

export default axios.create({
	// изменил в ручную http -> https но в таком случае получаю ошибку network error, вернул обратно на http
	baseURL: "http://docker.digital-spectr.ru:8888/api/"

	//baseURL: "http://docker.digital-spectr.ru:8888/api/"
	// baseURL: process.env.REACT_APP_BASE_URL - можно и так, но требуется доп.настройка среды окружения

})

//здесь есть вся документация по API для просмотра открытых данных по аэропортам:
// http://docker.digital-spectr.ru:8888/api/swagger/
