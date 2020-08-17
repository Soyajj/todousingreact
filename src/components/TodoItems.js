import React, { Component } from 'react'

export class TodoItems extends Component {
    getStyle = () =>{
        return{
            textDecoration : this.props.todo.completed ? 'line-through' : 'none',
            marginTop : '20px',
        }
    }
    render() {
        const {id,title,completed} = this.props.todo;
        return (
            <div className = "container" style = {this.getStyle()}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" style = {{padding : '0px'}}>
                    <input type = "checkbox" checked = {completed}
                    onChange = {this.props.markComplete.bind(this,id)}
                    
                    />
                    <span style= {todoList}>{title}</span>
                    <button style={delBtn} onClick = {this.props.delTodo.bind(this, id)}
                    className = "btn btn-outline-danger btn-sm"><i className = "fa fa-trash"/></button>
                    <hr style= {{width: '91%', float : 'left', position:'absolute'}}/>
                    </li>
               </ul>
            </div>
        )
    }
}

const delBtn = {
    float : 'right',
    marginRight : '2vw'
}

const todoList = {
    paddingLeft : '10px',
    textTransform : 'Uppercase'
}

export default TodoItems
