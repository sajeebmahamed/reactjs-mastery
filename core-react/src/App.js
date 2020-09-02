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
      <PersonCom person="Sajeeb" to="Alex"></PersonCom>
      <PersonCom person="Santos" to="Pique"></PersonCom>
    </div>
  );
}

function PersonCom(props) {
  const mood = ['angry', 'happy', 'not bad', 'good', 'smily']
  console.log(props);
  const style = {
    backgroundColor: 'red',
    fontSize: '1rem'
  }
  return(
    <div style={{ border: '1px solid green', width:'50%', margin:'2rem'}}>
        <h1 style={style}>Hey! {props.to} Whats Up? Mood: {mood[0]} </h1>
        <h2 style={style}> I'm Good {props.person} !! What About You? Mood: {mood[4]} </h2>
    </div>
  )
}

export default App;
