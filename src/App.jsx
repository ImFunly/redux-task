import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from './redux/todosSlice';

const App = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    let input;

    const handleAddTodo = () => {
        if (input.value.trim()) {
            dispatch(addTodo(input.value));
            input.value = '';
        }
    };

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <input type="text" ref={node => input = node} />
            <button onClick={handleAddTodo}>Agregar Tarea</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => dispatch(deleteTodo(index))}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
