import React from 'react';
import logo from './logo.svg';
import './App.css';
import VolunteerCategories from './components/VolunteerCategories/VolunteerCategories';
import MenuBar from './components/MenuBar/MenuBar';
import SearchBar from './components/SearchBar/SearchBar';


function App() {
  return (
    <div>
        <MenuBar />
        <SearchBar />
        <VolunteerCategories />
    </div>
  );
}

export default App;
