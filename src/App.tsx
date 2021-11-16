import { ThemeProvider } from 'styled-components';
import { theme } from './components/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './components/styles/Global';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<body>Wello Horld</body>}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
