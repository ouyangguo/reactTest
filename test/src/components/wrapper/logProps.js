/**
 * Created by ou on 2018/7/25.
 */
import React from 'react';

function logProps(Component) {
	class LogProps extends React.Component {
		componentDidUpdate(prevProps) {
			console.log('old props:', prevProps);
			console.log('new props:', this.props);
		}
		render() {
			let {forwardRef, ...props} = this.props;
			return (<Component ref={forwardRef} {...props} />)
		}
	}
	
	return React.forwardRef((props, ref) => (<LogProps {...props} forwardRef={ref}/>))
	
}
export default logProps;