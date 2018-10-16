"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var b = function () {
	function b(sex) {
		(0, _classCallCheck3.default)(this, b);

		this.sex = sex;
	}

	(0, _createClass3.default)(b, [{
		key: "tel",
		value: function tel() {
			console.log(this.sex);
		}
	}]);
	return b;
}();