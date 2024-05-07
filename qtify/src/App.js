import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar/navbar';
import Hero from './components/Hero/Hero';
import ShowCard from './components/ShowCard/showCard';

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
    </>
  );
}

export default App;
