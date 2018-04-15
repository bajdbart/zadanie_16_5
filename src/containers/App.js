import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { //initial state
            data: [ 
                    {   
                        id: 1,
                        text: 'clean room'
                    }, 
                    {
                        id: 2,
                        text: 'wash the dishes'
                    }, 
                    {
                        id: 3,
                        text: 'feed my cat'
                    }
                  ] 
        };
        // This binding is necessary to make `this` work in the callback
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(), //random id
        };
        const data = [...this.state.data, todo]; //new array with pushed -todo-
        this.setState({data}); //{data: data}
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id); //new array without one id to remove 
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}> 
                <Title title={'TodoList'} length={this.state.data.length}/>
                <TodoList todoList={this.state.data} remove={this.removeTodo}/>
            </div>
        );
    }
}

export default App;
