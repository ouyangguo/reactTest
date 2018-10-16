/**
 * Created by ou on 2018/8/1.
 */
const fs = require('fs');
fs.readFile('./src/App.js', function (err, str) {
	console.log(err);
	let codeObj = require("babel-core").transform(str, {
		plugins: ["transform-react-jsx"],
		presets: ["es2015"]
	});
	fs.writeFile('./src/App_after.js', codeObj.code);
});
