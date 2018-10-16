/**
 * Created by ou on 2018/7/25.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class Dialog extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {isShow: false};
		this.sure = this.sure.bind(this);
		this.cancel = this.cancel.bind(this);
	}
	// toggerShow() {
	// 	this.setState((preState, props) => ({isShow: !props.isShow}));
	// }
	sure() {
		this.props.sure();
	}
	cancel() {
		this.props.cancel();
	}
	
	render() {
		let domNode = document.createElement('div');
		domNode.className = 'dialog';
		document.getElementsByTagName('body')[0].appendChild(domNode);
		// let domNode = document.querySelector('.dialog');
		let content = (
			<div className={this.props.hidden ? 'hidden': ''}>
				<p>title</p>
				<div>
					{this.props.children}
				</div>
				<div>
					<button onClick={this.props.sure}>sure</button>
					<button onClick={this.props.cancel}>cancel</button>
				</div>
			</div>
		);
		return ReactDOM.createPortal(content, domNode)
	}
}
export default Dialog;