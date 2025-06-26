import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import './frontpage.css';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import Categories from './Categories';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
              </>
            }
          />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
