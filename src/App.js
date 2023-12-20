import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Compo from './components/Compo';
import React from 'react';
import Navbar1 from './components/Navbar1';
import Herosection1 from './components/Herosection1';
import Herosection2 from './components/Herosection2';
import Herosection3 from './components/Herosection3';
import Footer from './components/Footer';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import About from './components/About';
// import Form_section from './components/Form_section';


function App() {
  return (
    <>
       
        <Navbar1/>
        <Herosection1/>
        <Herosection2/>
        <Herosection3/>
        <Footer/>


    </>
  );
}

export default App;

{/* <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Form_section />} />
        </Routes>
        <Footer />
      </div>
    </Router> */}
