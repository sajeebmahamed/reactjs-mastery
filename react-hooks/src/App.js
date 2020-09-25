import React, { useReducer } from 'react';
import './App.css';
import CountReducer from './component/CountReducer/CountReducer';
import PatientManagement from './component/CountReducer/PatientManagement/PatientManagement';


function App() {
  
  return (
    <div className="App">
      <CountReducer/>
      <PatientManagement/>
    </div>
  );
}

export default App;
