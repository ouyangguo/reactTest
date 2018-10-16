/**
 * Created by ou on 2018/7/24.
 */
import React from 'react';
class ErrorContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
        console.log(error, info)
    }

    render() {
        if (this.state.hasError) {
            return <h1>something error!</h1>;
        }
        return this.props.children;
    }
}