import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Nav from './Nav';
import Home from './pages/Home';  
import About from './pages/About';
import Service from './pages/Service';
import PracticeAreas from './pages/PracticeAreas';
import Highlight from './pages/HighlightedSection';
import Footer from './pages/Footer';
import Card from './pages/Card/Card';
import Testimonial from './pages/Testimonial';
import NewsEvents from './pages/NewsEvents';

import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

import sqALMessages from './translation/sq-AL.json';

const messages = {
  'sq-AL': sqALMessages
};

const App = () => {
  const language = useSelector((state) => state.language.language);


  return (
    <Router>
      <IntlProvider locale={language} messages={messages[language]}>
        <Nav />
        <Home />
        <Service />
        <About />
        <PracticeAreas />
        <Highlight />
        <Card />
        <Testimonial />
        <NewsEvents />
        <Footer />
      </IntlProvider>
    </Router>
  );
}

export default App;
