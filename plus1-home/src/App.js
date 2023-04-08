import React from 'react';
import Labs from './labs';
import HelloWorld from './labs/a6/hello-world';
import Tuiter from './tuiter';
import { BrowserRouter, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import TodosthList from './screens/todosth/todosth-list';
import ProfileScreenDemo from './screens/profile-demo/profile-screen-demo';
import { Provider } from 'react-redux';
import store from './tuiter/data/store';
import HomScreenDemo from './screens/profile-demo/home-screen';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">

          <Routes>
            <Route path="/*" element={<Labs />} />
            <Route path="/userlogin" element={<HelloWorld />} />
            <Route path="/plus1/*" element={<Tuiter />} />

            {/* <Route path="/todosth" element={<TodosthList />} /> */}
            <Route path="/plus1-home" element={<HomScreenDemo />} />
            <Route path="/profile-demo" element={<ProfileScreenDemo />} />

          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;