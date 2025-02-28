import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import Index from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import AOS from "aos";
import { useEffect } from "react";


function App() {
  useEffect(() => {
          AOS.init({
            duration: 1000
          });
        }, []);
  return (

    <div>
     <Router>
      <Header />
   
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </div>


  );
}

export default App;
