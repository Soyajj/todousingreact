import React, { Component } from 'react'

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
            <div className = "container">
            <form onSubmit = {this.onSubmit} style = {inputsection}> 
            <i className = "fa fa-pencil fa-2x" />
                <input type = "text" name = "title" placeholder ="+ Add tasks..." 
                    onChange = {this.onChange}
                    value = {this.state.title}
                    required
                    autoComplete = "off"
                    className = "form-control form-control-sm"
                    style ={inputTask}
                />
             
                <button className = "btn btn-outline-primary btn-sm" type = "submit" style={addbtn}>Add</button>
            </form>
            </div>
        )
    }
}

const inputsection = {
    display : 'flex',
    padding : '5px',
    margin : '5px',
    flexDirection : 'row',
    justifyContent : 'space-between'
}

const addbtn= {
    margin:'5px',

}

const inputTask ={
    margin : '5px',
    border : 'none',
    borderBottom : '1px solid gray',
    borderRadius : '0'
}

export default Addtodo


