/**
 * Created by ou on 2018/6/8.
 */
import 'whatwg-fetch';

export const SET_WEATHER = 'SET_WARTHER';
// export const FETCH_WEATHER = 'FETCH_WEATHER';
export const START_FETCH = 'START_FETCH';
export const RECEIVE_FETCH = 'RECEIVE_FETCH';
export const SELECT_CITY = 'SELECT_CITY';
export const SET_CITY_LIST = 'SET_CITY_LIST';
const api = 'https://www.tianqiapi.com/api/?version=v1&city=';

export function setWeatcher(city, weather) {
	return {
		type: SET_WEATHER,
		data: {city, weather}
	}
}

export function startFetch() {
	return {
		type: START_FETCH
	}
}

export function receiveFetch(isError, errMsg) {
	return {
		type:RECEIVE_FETCH,
		data: {
			isError,
			isFetching: false,
			errMsg
		}
	}
}

export function setCityList(cityList) {
	return {
		type: SET_CITY_LIST,
		data: cityList
	}
}


export function selectCity(city) {
	return {
		type: SELECT_CITY,
		city
	}
}

export function fetchWeather(city) {
	return (dispatch, getState) => {
		let state = getState();
		if (state.cityWeather[city]) return;
		dispatch(startFetch());
		return fetch(api + city).then((respon) => {
			return respon.json();
		}).then(function (data) {
			console.log(data)
			dispatch(receiveFetch(false, ''));
			dispatch(setWeatcher(city, data.data));
		}).catch(() => {
			dispatch(receiveFetch(true, '网络错误'));
		})
	}
}

export function fetchCityList() {
	return new Promise((res, rej) => {
		setTimeout(() => res({state: 0, data: ['北京', '上海', '广州', '深圳']}), 2000)
	}).then(data => setCityList(data.data));
}

