import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import ContactForm from './pages/ContactForm';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Explore />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
