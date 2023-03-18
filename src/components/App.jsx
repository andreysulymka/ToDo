import { Component } from "react";
import ToDoList from "./TodoList";
import ToDoEditor from "./ToDoEditor";
import { nanoid } from 'nanoid';
import Filter from "./Filter";
import { Container } from "./App.styled";


export default class App extends Component {
  state = {
    todos: [
      { id: 'id-1', name: 'Вивчити React', completed: false },
      { id: 'id-2', name: 'Розібратись з React Router', completed: true },
      { id: 'id-3', name: 'Вивчити React', completed: true },
      { id: 'id-4', name: 'Вивчити React', completed: true },
    ],
    filter:''
  };

  addToDo = text => {
    console.log(text)

    const todo = {
      id: nanoid(),
      name: text,
      completed: false
    };
    this.setState(({todos}) => ({
      todos: [todo, ...todos]
    }))
  }

  deleteTodo = (todoid) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoid)
    }))
  };
   
  toggleCompleted = (todoid) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoid) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    }))
  }
  
  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})  
  }
  getVisibleTodo = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return todos.filter(todo => todo.name.toLowerCase().includes(normalizedFilter))
  };
  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    if(parsedTodos){this.setState({todos: parsedTodos})}
    
  }
  componentDidUpdate(prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
  };

  render() {
    const {  filter } = this.state;
    const visibleTodos = this.getVisibleTodo();
    return (
      <Container>
        <ToDoEditor onSubmit={this.addToDo} />
        <Filter value={filter} onChange={this.changeFilter}/>
        <ToDoList todos={visibleTodos} onDeleteToDo={this.deleteTodo} onToggleCompleted={this.toggleCompleted}/>
      </Container> 
    )
  }
}