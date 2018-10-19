/**
 * Created by ou on 2018/10/19.
 */
import React, {Component} from 'react';
import PickerHeader from './PickerHeader';
import './datePicker.css';
export default class DatePicker extends Component {
	constructor (props) {
		super(props);
		let today = new Date();
		this.state = {
			year: today.getFullYear(),
			month: today.getMonth() + 1
		};
		this.addMonth = this.addMonth.bind(this);
		this.clickDate = this.clickDate.bind(this);
	}
	render () {
		let days = [];
		let lastMonthDays = [];
		let nextMonthDays = [];
		let curMonthLastDay = new Date(this.state.year, this.state.month, 0);
		let curMonthFirstDay = new Date(this.state.year, this.state.month - 1, 1);
		let lastMonthLastDay = new Date(this.state.year, this.state.month - 1, 0);
		for (let i = curMonthFirstDay.getDay(); i > 0; i--) {
			lastMonthDays.push(lastMonthLastDay.getDate() - i + 1);
		}
		for (let i = curMonthLastDay.getDay() + 1, j = 1; i < 7; i++, j++) {
			nextMonthDays.push(j);
		}
		for (let i = 1; i <= curMonthLastDay.getDate(); i++) {
			days.push(i);
		}
		days = [...lastMonthDays, ...days, ...nextMonthDays];
		let ptr = [];
		let pbody = [];
		days.forEach((d, i) => {
			if (i % 7 === 0) {
				pbody.push(ptr);
				ptr = [];
			}
			ptr.push((<td data-vule={d} onClick={this.clickDate} className={(i < lastMonthDays.length || i > days.length - nextMonthDays.length - 1) ? 'disable' : ''} key={i}>{d}</td>));
		});
		pbody.push(ptr);
		pbody = pbody.map((i, index) => {
			return (<tr key={index}>{i}</tr>);
		});
		return (
			<div className="date-picker">
				<div className="p-head">
					<span className="left" data-desc="-1" onClick={this.addMonth}>&lt;</span>
					<span>{this.state.year + '-' + this.state.month}</span>
					<span className="right" data-desc="1" onClick={this.addMonth}>&gt;</span>
				</div>
				<table>
					<PickerHeader/>
					<tbody>
					{pbody}
					</tbody>
				</table>
			</div>
		)
	}
	
	addMonth (e) {
		let month = new Date(this.state.year, this.state.month + parseInt(e.target.dataset.desc) - 1, 1);
		this.setState({month: month.getMonth() + 1, year: month.getFullYear()});
	}
	clickDate (e) {
		console.log(this.state.year + '-' + this.state.month + '-' + e.target.dataset.vule);
	}
}
