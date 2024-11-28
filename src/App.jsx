import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './frontpage.css';
import Header from './Header';
import Banner from './Banner';
import FeaturedProducts from './FeaturedProduct';
import Footer from './Footer';
import Categories from './Categories';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';

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
                <FeaturedProducts />
                
              </>
            }
          />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
