import React from 'react';
import Activitiy from './activity';
import { BrowserRouter, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import store from './activity/data/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/plus1/*" element={<Activitiy />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;