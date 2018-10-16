/**
 * Created by ou on 2018/6/8.
 */
import { createStore, applyMiddleware  } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {
	fetchWeather,
	selectCity
} from './action';
import weather from './reducers/weather';
import promiseMiddleware from '../lib/promiseMiddleware';

const loggerMiddleware = createLogger();
// const store = createStore(weather, initState, applyMiddleware(thunkMiddleware, loggerMiddleware));
//
// console.log(store.getState());
// //
// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// });
//
// store.dispatch(addToDo('todo1'));
// store.dispatch(addToDo('todo2'));
// store.dispatch(toggleToDo(1));
// store.dispatch(setVisibilityFilter(VisibilityFilter.SHOW_ALL));
// store.dispatch(fetchWeather('深圳')).then(() => {
// 	store.dispatch(fetchWeather('广州'));
// 	store.dispatch(selectCity('广州'));
// });
// unsubscribe();
export default function configureStore(initState) {
	return createStore(weather, initState, applyMiddleware(promiseMiddleware, thunkMiddleware, loggerMiddleware));
};
