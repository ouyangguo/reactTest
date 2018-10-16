/**
 * Created by ou on 2018/5/23.
 */
import React from 'react'
class Clock extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {date: new Date(), style: {sa: 1}};
    }

    LOG() {
        console.log('click');
        this.setState({style: {sa: 2}});
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            // this.setState({date: new Date(), style: {bg: 'red'}})
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render () {
        console.log(this.state.style)
        if (this.state.style.sa !== 1) {
            throw new Error('111')
        }

        if (this.props.ctype == 1) {
            return <p {...this.state.style} ref={this.props.refx}>{this.state.date.toLocaleString()}</p>
        } else {
            return <span {...this.state.style} ref={this.props.refx}>222</span>
        }
    }
}
export default Clock