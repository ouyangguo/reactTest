import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AddToDo from './components/Input/AddToDo';
import ToDoList from './components/todo/ToDoList';
import logProps from './components/wrapper/logProps';
import Dialog from './components/dialog/Dialog';

const LogAddToDo = logProps(AddToDo);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			showDialog: false
		};
		this.addToDo = this.addToDo.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.el = React.createRef();
		this.fit = React.createRef();
		this.cancel = this.cancel.bind(this);
		this.sure = this.sure.bind(this);
	}
	
	addToDo(todo) {
		this.setState({todos: this.state.todos.concat([{todo}])});
		this.el.current.focus();
		this.toggleDialog();
	}
	
	removeItem(i) {
		console.log(i)
		let todos = this.state.todos.slice(0, i).concat(this.state.todos.slice(i + 1, this.state.todos.length));
		this.setState({todos});
		console.log(this.fit);
	}
	// shouldComponentUpdate() {
	// 	return false;
	// }
	componentDidUpdate() {
		console.log(this.fit.current);
	}
	toggleDialog() {
		this.setState((preState) => ({showDialog: !preState.showDialog}));
	}
	sure() {
		this.toggleDialog();
		console.log('============sure===============');
	}
	cancel() {
		this.toggleDialog();
		console.log('============cancel===============');
	}
	
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<LogAddToDo addToDo={this.addToDo} ref={this.el}/>
				<ToDoList todos={this.state.todos} removeItem={this.removeItem} fit={this.fit}/>
				<Dialog hidden={!this.state.showDialog} sure={this.sure} cancel={this.cancel} >
					dialog content
				</Dialog>
			</div>
		);
	}
}
console.log(Symbol('test'));
export default App;
