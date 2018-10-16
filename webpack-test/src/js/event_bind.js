/**
 * Created by ou on 2018/8/14.
 */
import _ from 'lodash';
export default function () {
	console.log('button click 3');
	_.each([1,2,3], (i) => {
		console.log(i);
	})
}