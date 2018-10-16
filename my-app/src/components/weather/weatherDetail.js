/**
 * Created by ou on 2018/10/11.
 */
import React, {Component} from 'react';

class WeatherDetail extends Component {
	render () {
		let weather = this.props.weather;
		if (!weather) return null;
		let hourWeather = weather.hours.map((item, index) => {
			return (
				<tr key={index}>
					<td>{item.day}</td>
					<td>{item.tem}</td>
					<td>{item.wea}</td>
					<td>{item.win}</td>
					<td>{item.win_speed}</td>
				</tr>
			);
		});
		let healthyTip = weather.index.map((item, index) => {
			return (
				<li key={index}>{item.title}: {item.level} {item.desc}</li>
			)
		});
		return (
			<div>
				<p>天气：{weather.wea}</p>
				<p>空气质量{weather.air_level}</p>
				<p>小贴士：{weather.air_tips}</p>
				<p>最高温度: {weather.tem1}</p>
				<p>最低温度: {weather.tem2}</p>
				<div>
					<p>小时天气情况</p>
					<table>
						<thead>
							<tr>
								<th>时间</th>
								<th>温度</th>
								<th>天气</th>
								<th>风向</th>
								<th>风速</th>
							</tr>
						</thead>
						<tbody>
						{hourWeather}
						</tbody>
					</table>
				</div>
				<div>
					<p>健康小贴士</p>
					<ul>
						{healthyTip}
					</ul>
				</div>
			</div>
		)
	}
}
export default WeatherDetail;