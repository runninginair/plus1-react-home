import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoItem, deleteTodo, updateTodos } from "./todos-reducer";

function TodosScreen() {

    const { todos } = useSelector((state) => state.todos);
    const [newTodoItem, setNewTodoItem] = useState({
        id: new Date().getTime(),
        text: "New Todo Item",
        completed: false,
    });
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Todos Demo --redux version</h1>
            <ul className="list-group">

                {/* Add a new todo item */}
                <li className="list-group-item">
                    <button
                        onClick={() =>
                            dispatch(
                                addTodoItem({
                                    ...newTodoItem,
                                    id: new Date().getTime(),
                                })
                            )
                        }
                        className="btn btn-sm btn-primary float-end">+</button>
                    <input
                        onChange={(e) => setNewTodoItem({ ...newTodoItem, text: e.target.value, })}
                        type={"text"} value={newTodoItem.text} />
                </li>


                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item">

                        <button
                            onClick={() => dispatch(deleteTodo(todo.id))}
                            className="btn btn-sm btn-danger float-end">X
                        </button>

                        <button
                            onClick={() => dispatch(updateTodos({ ...todo, editing: !todo.editing }))}
                            className={todo.editing ? "btn btn-sm btn-success float-end me-2" : "btn btn-sm btn-warning float-end me-2"}>
                            {todo.editing ? "Save" : "Edit"}
                        </button>

                        {/* Check-box input */}
                        <input id={todo.id}
                            onChange={(e) => dispatch(updateTodos({
                                ...todo,
                                completed: e.target.checked
                            }))}
                            className="me-2" type="checkbox" checked={todo.completed} />

                        {
                            todo.editing ? (
                                <input
                                    onChange={(e) => dispatch(updateTodos({
                                        ...todo,
                                        text: e.target.value,
                                    }))}
                                    className="w-75" type="text" value={todo.text} />

                            ) : (
                                <label for={todo.id}>
                                    {todo.text}
                                </label>

                            )
                        }

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodosScreen;