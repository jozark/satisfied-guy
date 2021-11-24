import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './components/styles/Global';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import Devider from './components/Devider';
import Gallery from './components/Gallery';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Faq from './components/Faq';
import FaqElement from './components/FaqElement';
import Footer from './components/Footer';

function App(): JSX.Element {
  const [isClicked, setIsClicked] = useState(false);

  const [faqs, setFaqs] = useState([
    { question: 'Wen mint ?!?', answer: 'TBA', open: false },
    { question: 'How many Items?', answer: '555', open: false },
    {
      question: 'What the hell is satisfied guy?',
      answer: 'hehe',
      open: false,
    },
  ]);

  function toggleFaq(index: number): void {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  }

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
                <Devider>Hamburg</Devider>
                <Gallery />
                <Roadmap />
                <Team />
                <Faq>
                  {faqs.map((faq, i) => (
                    <FaqElement
                      question={faq.question}
                      isClicked={faq.open}
                      index={i}
                      handleOnClick={() => toggleFaq(i)}
                    >
                      {faq.answer}
                    </FaqElement>
                  ))}
                </Faq>
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
