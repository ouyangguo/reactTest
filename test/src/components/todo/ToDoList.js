/**
 * Created by ou on 2018/7/24.
 */
import React from 'react';
import Item from './Item';

class ToDoList extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let list = this.props.todos.map((item, i) => {
			if (i === 0) return (<Item ref={this.props.fit} todo={item} key={item.todo} index={i} removeItem={this.props.removeItem}/>);
			return (<Item todo={item} key={i} index={i} removeItem={this.props.removeItem}/>);
		});
		return (
			<ul>{list}</ul>
		)
	}
}
export default ToDoList;