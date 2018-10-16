/**
 * Created by ou on 2018/8/14.
 */
import '../css/index.css';
import pic from '../images/img1.jpg';
import click_function from './event_bind';
import _ from 'lodash';
// import print from './print';

let ul = document.createElement('ul');
_.each([1, 2, 3, 4, 5], (i) => {
	let li = document.createElement('li');
	li.innerText = i;
	ul.appendChild(li);
});
document.body.appendChild(ul);
let btn = document.createElement('button');
btn.onclick = click_function;
document.body.appendChild(btn);
let img = document.createElement('img');
img.src = pic;
document.body.appendChild(img);
// print.print();

if (module.hot) {
	module.hot.accept('./event_bind.js', function () {
		console.log('event_bind.js update');
		click_function();
	})
}
