/**     2.5 Retrieving state from a reducer
 * 
 * Redux allows maintaining the state of an application. The state changes over time as
 * the user interacts with the application. There are four basic ways we interact with data:
 * create data, read data, update date, and delete data. We often refer to these operations
 * by the acronym CRUD. Let's implement a small todo app to illustrate the CRUD operations.
 * In the same reducers directory created earlier, create the reducer for the todo app in a
 * file called todos-reducer.js. Copy the content below into the file.
 */

import { createSlice } from '@reduxjs/toolkit'

const initialTodos = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];


/**     About "creatSlice()"
 * 
 * A function that accepts an initial state, an object of reducer functions, and a "slice name",
 * and automatically generates action creators and action types that correspond to the reducers
 * and state. This API is the standard approach for writing Redux logic.
 */
const todosSlice = createSlice({
    name: 'todos',
    initialState: initialTodos,

    /**     2.7 Handling application level events
     * Now that we have edited a todo object, we can send it to the reducer to store it
     * in the global state. Lets add an addTodo handler that can receive the new todo
     * instance and push it to the array of current todos.
     */
    reducers: {                                 // define reducer functions as a map

        addTodo(state, action) {                // reducer functions receive current state
            state.push({                        // mutate current state into new state, e.g.,
                _id: (new Date()).getTime(),    // pushing new object. _id set to current date
                do: action.payload.do,          // do set to "do" object sent through action obj
                done: false                     // commonly referred to as the "payload"
            });
        },

        deleteTodo(state, action) {             // new deleteTodo function extracts index
            const index = action.payload        // from action's payload and uses it to
            state.splice(index, 1)              // splice out the todo to be deleted
        },

        todoDoneToggle(state, action) {
            const todo = state.find((todo) =>
                todo._id === action.payload._id)
            todo.done = !todo.done
        }
    }
});

// export actions so we can call them from UI
export const { addTodo, deleteTodo, todoDoneToggle } = todosSlice.actions
export default todosSlice.reducer
