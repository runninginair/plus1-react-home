import React from "react";

// import the component that consumes the data
import HelloReduxExampleComponent from "./hello-redux-example-component";

// // import reducer that calculates/generates the data
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";   // import the new reducer
import Todos from "./todos-component";      // import new component to render todos

// import { createStore } from "redux";    // import createStore to store data from reducers
// instead of createStore, import the configureStore function
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";     // import Provider which will deliver the data

// const store = createStore(hello);        // create data storage
// combine all reducers into a single store each available through these namespaces
const store = configureStore({ reducer: { hello, todos } });

/**     2.4 Create a Hello World Redux component
 * 
 * Now we have to glue together the reducer producing the data, and the
 * HelloReduxExampleComponent consuming the data. We connect the two 
 * -- data source and data consumer -- through a Provider as shown below
 * in redux-examples/index.js.
 * 
 * Provider delivers data in store to child elements, component consumes the data.
 * In a nutshell, the Provider delivers the content of the store to all its child components.
 * This is done by invoking all the methods declared in useSelector in the components.
 */

const ReduxExamples = () => {
    return (
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos />
                <HelloReduxExampleComponent />
            </div>
        </Provider>
    );
};

export default ReduxExamples;
