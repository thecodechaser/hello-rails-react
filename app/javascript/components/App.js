import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => {
  return (
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
  )
}

export default App
