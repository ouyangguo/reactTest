/**
 * Created by ou on 2018/7/24.
 */
import React from 'react';

class Item extends React.Component {
	constructor(props) {
		super(props);
		this.removeItem = this.removeItem.bind(this);
	}
	removeItem() {
		this.props.removeItem(this.props.index);
	}
	
	render() {
		return (
			<li>
				{this.props.todo.todo}
				<a href="#" onClick={this.removeItem}>x</a>
			</li>
		)
	}
}
export default Item;