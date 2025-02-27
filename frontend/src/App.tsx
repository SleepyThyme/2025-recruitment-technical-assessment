import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import NavBar from './components/NavBar';
import SearchArea from './components/SearchArea';
import GridSection from './components/GridSection';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <SearchArea/>
      <GridSection/>
    </BrowserRouter>
  )
}

export default App;
