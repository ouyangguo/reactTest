/**
 * Created by ou on 2018/7/24.
 */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import ToDoList from './ToDoList';

it('test todo', () => {
    let todos = [{todo: 'test'}, {todo: 'test2'}];
    let ele = TestRenderer.create(<ToDoList todos={todos} />);
    let lis = ele.root.findAll((item) => {
        return item.type === 'li';
    });
    lis.forEach((item, i) => {
        console.log(item.children)
        expect(item.children.join('')).toEqual(todos[i].todo);
    });
    expect(lis.length).toEqual(todos.length);
});