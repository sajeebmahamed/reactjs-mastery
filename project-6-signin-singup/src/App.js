import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
firebase.initializeApp(firebaseConfig);
require('dotenv').config()

function App() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  })

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: ''
  })
  // console.log(userInfo);
  const newUserHandle = (e) => {
    let isFromValid = true
    if (e.target.name === 'email') {
      isFromValid = /\S+@\S+\.\S+/.test(e.target.value)
    }
    if (e.target.name === 'password') {
      const isPassValid = e.target.value.length > 6
      const isPassHasNumber = /\d{1}/.test(e.target.value)
      isFromValid = isPassValid && isPassHasNumber
    }
    if (isFromValid) {
      const newUserInfo = { ...user }
      newUserInfo[e.target.name] = e.target.value
      setUser(newUserInfo)
    }
  }
  const createAccount = (e) => {

    // console.log(userInfo.name, userInfo.email, userInfo.password);
    // firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
    // .then(res => {
    //   console.log(res);
    // })
    // .catch(err => {
    //   console.log(err);
    // })
    // e.preventDefault()
    console.log(user.email, user.password);

    if(user.email && user.password) {
      console.log('submit');
    }
    e.preventDefault();
    
  }

  // singInWith Google

  const handleSinginGoogle = () => {
    firebase.auth().signInWithPopup(provider)
      .then(res => {
        console.log(res);
        const { displayName, photoURL, email } = res.user
        const singnedInUSer = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
        setUser(singnedInUSer)
      })
      .catch(err => {
        console.log(err.message);
      })
  }
  const handleSingOutGoogle = () => {
    firebase.auth().signOut()
      .then(res => {
        console.log(res);
        const singOutUser = {
          isSignedIn: false,
          name: '',
          email: '',
          photo: ''
        }
        setUser(singOutUser)
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <div>
      { user.isSignedIn && <div>
        <p> name: {user.name} </p>
        <p> name: {user.email} </p>
        <img src={user.photo} alt="ss"></img>
      </div>}
      <div>
        <p> Own Auth </p>
        <p> {user.name} </p>
        <p> {user.email} </p>
      </div>
      <form onSubmit={createAccount}>
        <input onBlur={newUserHandle} name="name" type="text" placeholder="enter name" />
        <input onBlur={newUserHandle} name="email" type="email" placeholder="enter name" />
        <input onBlur={newUserHandle} name="password" type="password" placeholder="enter password" />
        <input type="submit" value="submit" />
      </form>
      <>
        { user.isSignedIn ?
          <button onClick={handleSingOutGoogle}>sing out</button> :
          <button onClick={handleSinginGoogle}>sing in</button>
        }

      </>
    </div>
  );
}

export default App;
