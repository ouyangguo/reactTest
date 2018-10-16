/**
 * Created by ou on 2018/7/24.
 */
import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li>{props.todo}</li>
        )
    }
}
export default Item;