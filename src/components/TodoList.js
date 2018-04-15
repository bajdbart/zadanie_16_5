import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
    const listElements = props.todoList.map(element => {
      return (
          <li key={element.id} id={element.id}>
              {element.text} 
              <button onClick={() => props.remove(element.id)}>Delete</button>
          </li>
      );  
    })
    
    return (
        <ul className={style.TodoList}>
            {listElements}
        </ul>
    );
}

export default TodoList;