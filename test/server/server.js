/**
 * Created by ou on 2018/7/30.
 */
// require('@babel/polyfill');
const express = require('express');
const App = require('./src/app.js');
const ReactDOMServer = require('react-dom/server');
const fs = require('fs');
const React = require('react');
let app = express();
let template = '';
fs.readFile('../build/index.html', (err, str) => {
	template = str;
});
let content = ReactDOMServer.renderToString(React.createElement(App));

app.get('/', function (req, res) {
	res.send(template.replace('<div id="root"></div>', `<div id="root">${content}</div>`))
});

let server = app.listen(8080, function () {
	console.log('==================server start================');
});