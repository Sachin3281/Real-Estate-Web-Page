import React from 'react'
import Hero from './component/navbar/hero/Hero';
import Navbar from './component/navbar/Navbar';
import Best from './component/navbar/best/Best';
import Featured from './component/navbar/featured/Featured';
import Footer from './component/navbar/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Best />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
