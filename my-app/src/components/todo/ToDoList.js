/**
 * Created by ou on 2018/7/24.
 */
import React from 'react';
import Item from './Item';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let list = this.props.todos.map((item) => {
            return (<Item todo={item} />);
        });
        return (
            <ul>{list}</ul>
        )
    }
}
export default ToDoList;