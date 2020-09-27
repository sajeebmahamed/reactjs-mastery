import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeComponets from './components/HomeComponets/HomeComponets';

function App() {
  return (
    <div>
        <HomeComponets />
    </div>
  );
}

export default App;
