import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const Person = {
    name: 'Sajeeb Ahamed',
    age: 19,
    designation: 'Frontend Developer'
  }
  const ulStyle = {
    color: 'yellow',
    fontSize: '2rem'
  }
  console.log(Person);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{fontSize:'2rem'}}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul style={ulStyle}>
          <li> {Person.name} </li>
          <li> {Person.age} </li>
          <li> {Person.designation} </li>
        </ul>
      </header>
      <PersonCom></PersonCom>
    </div>
  );
}

function PersonCom() {
  const style = {
    backgroundColor: 'red',
    fontSize: '1rem'
  }
  return(
    <div>
        <h1 style={style}>Hey! Man Whats Up?</h1>
        <h2 style={style}> I'm Good Man!! What About You?</h2>
    </div>
  )
}

export default App;
