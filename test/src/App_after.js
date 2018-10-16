'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

// var _logo = require('./logo.svg');
//
// var _logo2 = _interopRequireDefault(_logo);
var _logo2 = {default: ''};


// require('./App.css');

var _AddToDo = require('./components/Input/AddToDo');

var _AddToDo2 = _interopRequireDefault(_AddToDo);

var _ToDoList = require('./components/todo/ToDoList');

var _ToDoList2 = _interopRequireDefault(_ToDoList);

var _logProps = require('./components/wrapper/logProps');

var _logProps2 = _interopRequireDefault(_logProps);

var _Dialog = require('./components/dialog/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LogAddToDo = (0, _logProps2.default)(_AddToDo2.default);

var App = function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			todos: [],
			showDialog: false
		};
		_this.addToDo = _this.addToDo.bind(_this);
		_this.removeItem = _this.removeItem.bind(_this);
		_this.el = _react2.default.createRef();
		_this.fit = _react2.default.createRef();
		_this.cancel = _this.cancel.bind(_this);
		_this.sure = _this.sure.bind(_this);
		return _this;
	}

	_createClass(App, [{
		key: 'addToDo',
		value: function addToDo(todo) {
			this.setState({ todos: this.state.todos.concat([{ todo: todo }]) });
			this.el.current.focus();
			this.toggleDialog();
		}
	}, {
		key: 'removeItem',
		value: function removeItem(i) {
			console.log(i);
			var todos = this.state.todos.slice(0, i).concat(this.state.todos.slice(i + 1, this.state.todos.length));
			this.setState({ todos: todos });
			console.log(this.fit);
		}
		// shouldComponentUpdate() {
		// 	return false;
		// }

	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			console.log(this.fit.current);
		}
	}, {
		key: 'toggleDialog',
		value: function toggleDialog() {
			this.setState(function (preState) {
				return { showDialog: !preState.showDialog };
			});
		}
	}, {
		key: 'sure',
		value: function sure() {
			this.toggleDialog();
			console.log('============sure===============');
		}
	}, {
		key: 'cancel',
		value: function cancel() {
			this.toggleDialog();
			console.log('============cancel===============');
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'App' },
				_react2.default.createElement(
					'header',
					{ className: 'App-header' },
					_react2.default.createElement('img', { src: _logo2.default, className: 'App-logo', alt: 'logo' }),
					_react2.default.createElement(
						'h1',
						{ className: 'App-title' },
						'Welcome to React'
					)
				),
				_react2.default.createElement(LogAddToDo, { addToDo: this.addToDo, ref: this.el }),
				_react2.default.createElement(_ToDoList2.default, { todos: this.state.todos, removeItem: this.removeItem, fit: this.fit }),
				_react2.default.createElement(
					_Dialog2.default,
					{ hidden: !this.state.showDialog, sure: this.sure, cancel: this.cancel },
					'dialog content'
				)
			);
		}
	}]);

	return App;
}(_react.Component);

exports.default = App;