import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.scss';
import Nav from './Nav';
import Home from './pages/Home';  
import About from './pages/About';
// import Footer from './components/Footer';
// import Blog from './pages/Blog';
// import Product from './pages/Product';

const App = () => {
  return (
    <Router>
    <Nav />
    <Home />
    <About />
    </Router>
  );
}

export default App;
