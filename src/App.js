import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.scss';
import Nav from './Nav';
import Home from './pages/Home';  
import About from './pages/About';
import Service from './pages/Service';
import PracticeAreas from './pages/PracticeAreas';
import Highlight from './pages/HighlightedSection';
import Footer from './pages/Footer';
import Card from './pages/Card/Card'
import Testimonial from './pages/Testimonial';



const App = () => {
 
  return (
    <Router>
    <Nav />
    <Home />
    <Service />
    <About />
    <PracticeAreas />
    <Highlight />
    <Card />
    <Testimonial />
    <Footer />
    </Router>
    
  );
}

export default App;
