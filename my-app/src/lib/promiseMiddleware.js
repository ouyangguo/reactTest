/**
 * Created by ou on 2018/10/12.
 */
export default function ({dispatch}) {
	return (next) => (action) => {
		if (action.then) {
			return action.then(dispatch);
		} else {
			console.log(action);
			return next(action);
		}
	}
}