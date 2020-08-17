import React, { Component } from 'react';
import Todos from './components/Todos';
import { v4 as uuid} from 'uuid';
import Addtodo from './components/Addtodo';
import Header from './components/layout/Header';
import Tasks from './components/Tasks';
import './App.css';

class App extends Component {
  state = {
    todos : [
      {
        id : uuid(),
        title : 'Sample',
        completed : false,
      },
    ]
  }

  markComplete = (id) =>{
    this.setState({todos : [...this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo
    }
    )]})
  }

  delTodo = (id) =>{
    this.setState({todos : [...this.state.todos.filter(todo => (
      todo.id !== id
    ))]})
  }

  addTodo = (title) => {
    const newTodo = {
      id : uuid(),
      title,
      completed :false
    }
    this.setState({todos : [...this.state.todos, newTodo]})
  }


  render(){
  return (
    <div className="App">
      <div className = "container">
        <Header />
        <Addtodo addTodo = {this.addTodo} />
        <Tasks length = {this.state.todos.length} />
        <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
      </div>
    </div>
  );
}}

export default App;
