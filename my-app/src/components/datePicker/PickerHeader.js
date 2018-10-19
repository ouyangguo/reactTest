/**
 * Created by ou on 2018/10/19.
 */
import React, {PureComponent} from 'react';

export default class PickerHeader extends PureComponent{
	render () {
		let ths = ['日', '一', '二', '三', '四', '五', '六'].map((i) => (<th key={i}>{i}</th>));
		return (
			<thead><tr>{ths}</tr></thead>
		)
	}
}