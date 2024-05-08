import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/Hero';
import ShowCard from './components/ShowCard/showCard';
import Faq from './components/Faq/Faq';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <ShowCard text="Top Albums" type="Albums"/>
      <hr/>
      <ShowCard text="New Albums" type="Albums"/>
      <hr/>
      <ShowCard text="Songs" type="Songs"/>
      <hr />
      <Faq />
    </>
  );
}

export default App;
