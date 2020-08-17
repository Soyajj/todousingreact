import React, { Component } from 'react';
import '../App.css'

export class TodoItems extends Component {
    getStyle = () =>{
        return{
            textDecoration : this.props.todo.completed ? 'line-through' : 'none',
            color : this.props.todo.completed? 'gray' : 'black'
        }
    }
    render() {
        const {id,title,completed} = this.props.todo;
        return (
            <div style = {this.getStyle()} className = "todoitems">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" style = {{padding : '5px'}}>
                    <input type = "checkbox" checked = {completed}
                    onChange = {this.props.markComplete.bind(this,id)}
                    />
                    <span className = "todolist">{title}</span>
                    <button style={delBtn} onClick = {this.props.delTodo.bind(this, id)}
                    className = "btn btn-outline-danger btn-sm"><i className = "fa fa-trash"/></button>
                    <hr />
                    </li>   
               </ul>
            </div>
        )
    }
}

const delBtn = {
    float : 'right',
}



export default TodoItems
