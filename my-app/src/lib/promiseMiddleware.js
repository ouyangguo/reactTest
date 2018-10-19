/**
 * Created by ou on 2018/10/12.
 */
export default function ({dispatch}) {
	return (next) => (action) => {
		if (action.then) {
			return action.then(dispatch);
		} else {
			let r = next(action);
			console.log(r)
			return r;
		}
	}
}