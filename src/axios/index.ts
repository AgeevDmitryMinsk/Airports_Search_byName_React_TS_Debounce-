import axios from "axios";

//console.log(process.env.REACT_APP_BASE_URL) // undefined

export default axios.create({
	baseURL: "http://docker.digital-spectr.ru:8888/api/"
	// попытка обойти ошибку http-> https не дала результата
	//baseURL: "https://ageevdmitryminsk.github.io/?page=http://docker.digital-spectr.ru:8888/api/"

	//baseURL: "http://docker.digital-spectr.ru:8888/api/"
	// baseURL: process.env.REACT_APP_BASE_URL - можно и так, но требуется доп.настройка среды окружения

})

//здесь есть вся документация по API для просмотра открытых данных по аэропортам:
// http://docker.digital-spectr.ru:8888/api/swagger/

//any
