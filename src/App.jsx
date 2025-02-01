import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Импортируем необходимые компоненты для маршрутизации
import './App.scss'
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Experts from './pages/Experts/Experts'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
        <Routes>  {/* Определяем маршруты */}
          <Route path="/" element={<Home />} />  {/* Главная страница */}
          <Route path="/Experts" element={<Experts />} />  {/* Главная страница */}
          <Route path="/About" element={<About />} />  {/* Главная страница */}
          <Route path="/Contact" element={<Contact />} />  {/* Главная страница */}
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
