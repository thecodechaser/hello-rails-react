import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import store from '../redux/ConfigureStore';

const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route
          path="/"
          element={(
            "Welcome"
        )}
        />
    <Route
          path="/greeting"
          element={(
            <Greeting />
        )}
        />
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
