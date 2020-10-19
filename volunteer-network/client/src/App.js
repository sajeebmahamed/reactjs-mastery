import React from 'react';
import logo from './logo.svg';
import './App.css';
import VolunteerCategories from './components/VolunteerCategories/VolunteerCategories';
import MenuBar from './components/MenuBar/MenuBar';


function App() {
  return (
    <div>
        <MenuBar />
        <VolunteerCategories />
    </div>
  );
}

export default App;
