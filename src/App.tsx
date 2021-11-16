import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Wello Horld</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
