import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

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
  const products = [
    { name: 'Adobe Xd', Price: 'Free' },
    { name: 'Adobe Photoshop', Price: '$199' },
    { name: 'Adobe Illustrator', Price: '$299' }
  ]
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
      <Users></Users>
      <PersonCom person="Sajeeb" to="Alex"></PersonCom>
      <PersonCom person="Santos" to="Pique"></PersonCom>
      <AdobePricing products={products} ></AdobePricing>
      <Counter></Counter>

    </div>
  );
}

function PersonCom(props) {
  const mood = ['angry', 'happy', 'not bad', 'good', 'smily']
  console.log('person props',props);
  const style = {
    backgroundColor: 'red',
    fontSize: '1rem'
  }
  
  return(
    <div>
      <div style={{ border: '1px solid green', width: '50%', margin: '2rem' }}>
        <h1 style={style}>Hey! {props.to} Whats Up? Mood: {mood[0]} </h1>
        <h2 style={style}> I'm Good {props.person} !! What About You? Mood: {mood[4]} </h2>
      </div>
    </div>
    
  )
}
function AdobePricing(props) {
  // console.log(props.products);
  const products = props.products
  const {name, Price} = props.products
  const cardStyle = {
    border: '1px solid green',
    backgroundColor: 'black',
    color: '#fff',
    width: '50%'
  }
  return (
    products.map(pd => <PersonCom key={pd.name} products={pd}></PersonCom>)
    // <div style={cardStyle}>
    //     <h1> Name: {name} </h1>
    //     <p> Price: {Price} </p>
    // </div>
  )
  
}

function Counter() {
  const [count, setCount] = useState(10)
  // const handleDecrease = () => setCount(count - 1)
  // const handleIncrease = () => setCount(count + 1)
  return (
    <div>
      <h1> Count : {count} </h1>
      <button onMouseOver={() => setCount(count-1)}>-</button>
      <button onClick={() => setCount(count+1)}>+</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([])
  console.log("users data", users);

  //  useEffect(() => {
  //    async function userData() {
  //      const res = await fetch('https://jsonplaceholder.typicode.com/users')
  //      const data = await res.json()
  //      setUsers(data)
  //    }
  //    userData()
  // }, [])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  const uStyle = {
    border: '1px solid red',
    padding: '1rem 0'
  }
  return (
    <div>
      <ul>
        {
           users.map(user => <div key={user.id} style={uStyle}>
             <li> {user.name} </li>
             <li> {user.email} </li>
           </div>)
        }
      </ul>
    </div>
  )
}
export default App;
