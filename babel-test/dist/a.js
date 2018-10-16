'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by ou on 2018/8/8.
 */
var a = function () {
	function a(name, age) {
		(0, _classCallCheck3.default)(this, a);

		this.name = name;
		this.age = age;
	}

	(0, _createClass3.default)(a, [{
		key: 'hello',
		value: function hello() {
			console.log('hello, my name is ' + this.name + ' and i am ' + this.age + ' years old');
			(0, _symbol2.default)('test');
		}
	}]);
	return a;
}();

exports.default = a;