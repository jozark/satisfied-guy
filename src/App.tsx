import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './components/styles/Global';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';

function App(): JSX.Element {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  isClicked={isClicked}
                  handleClick={() => setIsClicked(!isClicked)}
                />
                <Hero />
                <Info />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
