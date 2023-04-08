import React from "react";
import { useSelector } from "react-redux";

function HomScreenDemo() {
    const { user } = useSelector((state) => state.user);

    // Must use the name "count" not "number" or anyone else,
    // cause the count is the object name in "counter-reducer.js" (line 4).
    const { count } = useSelector((state) => state.counter);

    const { todos } = useSelector((state) => state.todos);

    return (
        <div>
            <h1>Home Screen Demo</h1>

            <h2>Welcome {user.firstName} {user.lastName}!</h2>

            <h2>Count from CounterDemo: {count}</h2>

            <h2>Todos [Redux version]</h2>
            <ul>
                {todos.map((todo => (
                    <li color={todo.color} key={todo.id}>{todo.text}</li>
                )))}
            </ul>

        </div>
    );
}

export default HomScreenDemo;