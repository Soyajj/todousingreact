import React, { Component } from 'react';
import '../App.css'

export class Addtodo extends Component {
    state = {
        title : ''
    }


    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title : ''});
    }

    onChange = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }
    render() {
        return (
            <div className = "addtodo">
                <form onSubmit = {this.onSubmit} className = "inputsection"> 
                <i className = "fa fa-pencil fa-2x" />
                    <input type = "text" name = "title" placeholder ="+ Add tasks..." 
                        onChange = {this.onChange}
                        value = {this.state.title}
                        required
                        autoComplete = "off"
                        className = "form-control form-control-sm"
                    />
                    <button className = "btn btn-outline-primary btn-sm" type = "submit">Add</button>
                </form>
            </div>
        )
    }
}



export default Addtodo


