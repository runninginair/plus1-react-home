import React from "react";
import { useSelector } from "react-redux";      // import useSelector hook  from react-redux

/**     2.4 Create a Hello World Redux component
 * 
 * The component uses redux's useSelector hook to extract the message from the reducer.
 * When the component loads, reducers pass their data in the function declared in useSelector.
 * In the code below, the parameter hello in (hello) => { … }, gets the object returned by the
 * reducers, e.g., {message: 'Hello World'}, therefore, (hello) => hello.message returns
 * 'Hello World', and that's the value const message is initialized with.
 * The component goes on to render 'Hello World' in an H1 element.
 * 
 * 
 *      2.5 Retrieving state from a reducer
 * 
 * Before we implemented the todos-reducer, we only had the hello reducer. When we combined
 * the reducers we bound them to attributes hello and todos:
 * const store = configureStore({reducer: {hello, todos}}).
 * The state of each reducer is now accessible through these properties.
 * We now need to retrieve the message from the hello sub state as shown below.
 */

const HelloReduxExampleComponent = () => {
    // const message = useSelector((hello) => hello.message);  // extract 'Hello World' from reducer
    const message = useSelector((state) => state.hello.message);  // extract 'Hello World' from reducer

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
};

export default HelloReduxExampleComponent;
