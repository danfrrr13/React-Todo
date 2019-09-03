import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      new: {},
      // input: ''
    }
  }

  newTodo = attr => {
    const todo = {
      task: attr.task,
      id: Date.now(),
      completed: false
    }

    return todo;
  }

  // changeHandler = e => {
  //   this.setState({input: e.target.value})
  //   console.log('input: ', this.state.input)
  // }

  addTodo = async todo => {
    console.log('todo being added/task passed in: ', todo)
    await this.setState({todos: [...this.state.todos, todo]});
    console.log('todos: ', this.state.todos)
  }

  submitTodo = async (e, todo) => {
    e.preventDefault();
    const task = this.newTodo({
      task: todo,
    })
    console.log('returned task: ', task)
    await this.setState({new: task})
    console.log('this.state.new: ', this.state.new)
    this.addTodo(this.state.new)
    this.setState({input: ''})
  }

  filterCompleted = e => {
    e.preventDefault();
    const filteredTodos = this.state.todos.filter(todo => todo.completed === false);
    this.setState({todos: filteredTodos});
  }

  changeCompleted = async e => {
    const targetId = e.target.id;
    const item = this.state.todos.find(item => item.id == targetId);
    item.completed = !item.completed;
    const newArray = this.state.todos.filter(todo => todo.id != targetId);
    await this.setState({todos: [...newArray, item]});
  }


  render() {
    return (
      <div>
        <h1>Todo List...</h1>
        <TodoList todos={this.state.todos} completed={this.changeCompleted} />
        <TodoForm submit={this.submitTodo} filter={this.filterCompleted} add={this.addTodo} />
      </div>
    );
  }
}

export default App;
