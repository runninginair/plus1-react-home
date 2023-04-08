/**     2.4 Create a Hello World Redux component
 * 
 * Our first example will be the simplest redux example. 
 * Create a reducer that provides some static data, e.g., a "Hello World" message.
 * Copy the code below into src/labs/a7/redux-examples/reducers/hello.js. 
 * Notice that we could have stored the data {message: 'Hello World'} into a static
 * JSON file, but the point here is to learn how data can be shared across multiple
 * components, and how each can interact with the data like reading and writing to it.
 * To do that we wrap the data in a function that can calculate the data dynamically
 * as circumstances change over time.
 */

const hello = () => (
    {
        message: 'Hello World'
    }
);

export default hello;