/**
 * Created by ou on 2018/7/24.
 */
import React from 'react';

class AddToDo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: ''
		};
		this.inputToDo = this.inputToDo.bind(this);
		this.addToDo = this.addToDo.bind(this);
	}
	
	inputToDo(e) {
		console.log(e.target.value);
		this.setState({todo: e.target.value});
	}
	
	addToDo() {
		this.props.addToDo(this.state.todo);
		this.setState({todo: ''});
	}
	submit(e) {
		e.preventDefault();
		return false;
	}
	
	render() {
		return (
			<form action="" onSubmit={this.submit}>
				<input type="text" ref={this.props.el} onChange={this.inputToDo} value={this.state.todo}/>
				<button onClick={this.addToDo}>add</button>
			</form>
		)
	}
}

export default React.forwardRef((props, ref) => {
	return (
		<AddToDo {...props} el={ref}/>
	)
});