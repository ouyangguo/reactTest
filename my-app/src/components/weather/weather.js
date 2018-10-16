/**
 * Created by ou on 2018/9/21.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../store/action';
import WeatherDetail from './weatherDetail';

class Weather extends Component {
	constructor (props) {
		super(props);
		this.state = {
			selectDay: 0
		}
	}
	selectDay(i) {
		this.setState({selectDay: i});
	}
	render() {
		if (!this.props.cityList.length) return null;
		let cityLis = this.props.cityList.map((city, index) => {
			return (<li key={index} onClick={() => {this.props.selectCity(city);this.props.fetchWeather(city)}}><a href="#">{city}</a></li>);
		});

		let weather = this.props.cityWeather[this.props.city];
		let dayLis = weather && weather.map((item, index) => {
			return (
				<li key={index}><a href="#" onClick={() => {this.selectDay(index)}}>{item.day}</a></li>
			)
		});
		return (
			<div>
			<ul>
				{cityLis}
			</ul>
			<div>
				<p>当前城市{this.props.city}</p>
			</div>
				<div>
					<ul>{dayLis}</ul>
					<p>天气情况</p>
					<WeatherDetail weather={weather && weather[this.state.selectDay]}/>
				</div>
			</div>
		)
	}
	componentDidMount() {
		this.props.fetchCityList().then(() => {
			let city = this.props.cityList[0];
			this.props.selectCity(city)
			this.props.fetchWeather(city);
		})
	}
}
function mapStateToProps (state) {
	return state;
}
export default connect(mapStateToProps, actions)(Weather);