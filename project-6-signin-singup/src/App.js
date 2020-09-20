import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
firebase.initializeApp(firebaseConfig);

function App() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: ''
  })
  console.log(userInfo);
  const newUserHandle = (e) => {
    setUserInfo({...userInfo, [e.target.name]: e.target.value})
  }
  const createAccount = (e) => {
    e.preventDefault();
    console.log(userInfo.name, userInfo.email, userInfo.password);
    firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }
  return (
    <div>
      <form>
        <input onBlur={newUserHandle} name="name" type="text" placeholder="enter name" />
        <input onBlur={newUserHandle} name="email" type="email" placeholder="enter name" />
        <input onBlur={newUserHandle} name="password" type="password" placeholder="enter password" />
        <button onClick={createAccount}> Create Account </button>
      </form>
    </div>
  );
}

export default App;
