import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <h1>hello world</h1>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
