# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
### tuiter-react-web-app


# Redux in 100 Seconds
[https://www.youtube.com/watch?v=_shA5Xwe8_4]

Redux, a single source of truth for all the data in your JavaScript application. Modern web applications are represented as a complex tree of components. Components that constantly produce and share data called state and when state is decentralized it can become difficult to understand and test.

Redux is both a pattern and library that helps developers implement complex state
management requirements at scale. It was created by Dan Abramov and Andrew Clark at Facebook in 2015. It is one of the most loved and hated libraries in the react ecosystem.

Redux relies on a single immutable object to store all of the application state, kind like a client-side database. To change the state like when a button is clicked an action will be dispatched which has a name like an event and a payload with a data that it want to change. Remember the store is immutable, so to change the state of the application an entirely new object is created by passing the current state and action payload into a reducer function which returns a new object with the entrie application state. The end result is a one way data flow that is predictable and testable, and it also opens the door to awesome dev tools that allow you to time travel through your application's data, but it comes at a cost of additional boilerplate code that might add too much complexty to a smaller project.

                                     (Immutable Object)
            --> Action ---> Reducer -----> Store -----> 
           |                                           |
  Dispatch |                                           | Subscribe
           |                                           |
            <--------  Web Application UI <------------
                            (Frontend)

To get started, create a react app with your favorite tool then install the redux toolkit. First, use configure store to setup the global store objext which will regiser any reducers defined elsewhere in the code.

Then provider will make its data accessible to the entire component tree, next create a slice like pizza o represent some data in the store, it should have a unique name and initialstate, but most importantly it contains a collection of reducers which are functions that take the old state and an action then define the logic required to change the state redux toolkit will automatically generate actions that correspond to the names of these reducer functions, we can export them put them to use in an actual UI component.

The beauty of redux is that we can select data anywhere in the application without the need for context or prop-drilling. Instead, we can grab any reactive value or slice in the store with the { useSelector } hook. Now, to change the application's data, an action needs to be dispatched to the store that can be accomlished with the use dispatch hook which might send an action name and data payload on a normal browser event like a button click. Now, the server application and install the Redux devtools browser extension unlike a normal project you're able to inspect and debug the entire timeline of actions and state changes in your application.



[End]