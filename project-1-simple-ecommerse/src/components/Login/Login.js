import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { LogInContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


firebase.initializeApp(firebaseConfig)

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    })
    const [newUser, setNewUser] = useState(false)
    const [logedInUser, setLogedInUser] = useContext(LogInContext)

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

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
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    console.log(res);
                    const newUser = { ...user }
                    newUser.error = ''
                    newUser.success = true
                    setUser(newUser)
                    updateUserName(user.name)
                })
                .catch(err => {
                    console.log(err.message);
                    const newUser = { ...user }
                    newUser.error = err.message
                    newUser.success = false
                    setUser(newUser)
                })
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUser = { ...user }
                    newUser.error = ''
                    newUser.success = true
                    setUser(newUser)
                })
                .catch(err => {
                    console.log(err.message);
                    const newUser = { ...user }
                    newUser.error = err.message
                    newUser.success = false
                    setUser(newUser)
                })
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
                setLogedInUser(singnedInUSer)
                history.replace(from);
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
    const updateUserName = name => {
        const user = firebase.auth().currentUser
        user.updateProfile({
            displayName: name
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleFb = () => {
        firebase.auth().signInWithPopup(fbProvider)
            .then(res => {
                let token = res.credential.accessToken;
                let user = res.user;
                console.log(token);
                console.log(user);
            })
            .catch(err => {
                let errorMessage = err.message;
                let email = err.email;
                console.log(errorMessage);
                console.log(email);
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
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            <label htmlFor="newUser">New User Sign up</label>
            <form onSubmit={createAccount}>
                {newUser && <input onBlur={newUserHandle} name="name" type="text" placeholder="enter name" />}
                <input onBlur={newUserHandle} name="email" type="email" placeholder="enter email" />
                <input onBlur={newUserHandle} name="password" type="password" placeholder="enter password" />
                <input type="submit" value="submit" />
            </form>
            <p> {user.error} </p>
            { user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
            <>
                { user.isSignedIn ?
                    <button onClick={handleSingOutGoogle}>sing out</button> :
                    <button onClick={handleSinginGoogle}>sing in</button>
                }
                <button onClick={handleFb}> singin with facebook </button>

            </>
        </div>
    );
};

export default Login;