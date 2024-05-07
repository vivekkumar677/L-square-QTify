import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from './api/api';
import { StyledEngineProvider } from '@mui/styled-engine';
import Hero from './components/Hero/Hero';
// import ShowCards from './components/ShowCard/ShowCard';

function App() {

  return (
    <>
    <StyledEngineProvider injectFirst>
      {/* <Navbar topAlbums={topAlbums} newAlbums={newAlbums} songs={songs} /> */}
      <Navbar />
    </StyledEngineProvider>
    </>
  );
}

export default App;
