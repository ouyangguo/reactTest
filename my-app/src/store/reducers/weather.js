/**
 * Created by ou on 2018/9/21.
 */
import {combineReducers } from 'redux';
import {SET_WEATHER, START_FETCH, RECEIVE_FETCH, SELECT_CITY, SET_CITY_LIST} from '../action';

function setFetchStatus(status = {}, action) {
	switch (action.type) {
		case START_FETCH: return {
			isFetching: true,
			isError: false,
			errMsg: ''
		};
		case RECEIVE_FETCH: return action.data;
		default: return status;
	}
}

function receiveWeather(weather = {}, action) {
	console.log('action is', action)
	if (action.type === SET_WEATHER) {
		return {...weather, [action.data.city]: action.data.weather};
	}
	return weather;
}

function selectCity(city = '', action) {
	if (action.type === 'SELECT_CITY') return action.city;
	return city;
}

function setCityList(cityList = [], action) {
	if (action.type === SET_CITY_LIST) {
		return action.data;
	}
	return cityList;
}

export default combineReducers({
	fetchStatus: setFetchStatus,
	city: selectCity,
	cityWeather: receiveWeather,
	cityList: setCityList
})
