import { createSlice } from "@reduxjs/toolkit"
import { addTodo } from "../labs/a7/redux-examples/reducers/todos-reducer";

const initialState = {
    todos: [
        { id: 1, text: "Learn React-Redux I", completed: true, editing: false, color: "blue" },
        { id: 2, text: "Learn React-Redux II", completed: false, editing: true, color: "red" },
        { id: 3, text: "Learn React-Redux III", completed: true, editing: false, color: "green" },
        { id: 4, text: "Learn React-Redux VI", completed: false, editing: false, color: "orange" },
    ]
}

const todosSlice = createSlice(
    {
        name: "todos",
        initialState,
        reducers: {
            deleteTodo: (state, action) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            },

            addTodoItem: (state, action) => {
                state.todos.push(action.payload);
            },

            updateTodos: (state, action) => {
                state.todos = state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                        return action.payload;
                    }
                    return todo;
                });
            },

        },

    }
);

export default todosSlice.reducer;
export const { deleteTodo, addTodoItem, updateTodos } = todosSlice.actions;