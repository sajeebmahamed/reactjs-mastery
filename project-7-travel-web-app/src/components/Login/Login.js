import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { firebaseConfig } from './firebase.config';
import './Login.css'
const firebase = require("firebase/app");
require("firebase/auth");
firebase.initializeApp(firebaseConfig)


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        image: '',
        password: '',
        successs: false,
        error: ''
    })

    //input field validation start 

    const handleChange = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);

            isFieldValid = isPasswordValid && passwordHasNumber;
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
        e.preventDefault();
    }
    // input field validation done

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setUser(newUserInfo)
                    updateUserInfo(user.name)
                })
                .catch(err => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = err.message
                    newUserInfo.success = false
                    setUser(newUserInfo)
                })
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setUser(newUserInfo)
                    setLoggedInUser(newUserInfo)
                    history.replace(from);
                })
                .catch(err => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = err.message
                    newUserInfo.success = false
                    setUser(newUserInfo)
                })
        }
        e.preventDefault()
    }

    const updateUserInfo = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(function () {
            console.log("user updated");
        }).catch(function (error) {
            console.log("error occured");
        });
    }

    //sign in with google
    const handleGoogleSingIn = (e) => {
        const provider = new firebase.auth.GoogleAuthProvider();
        e.preventDefault()
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, photoURL, email } = res.user
                const singedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    image: photoURL,
                    password: '',
                    successs: true,
                    error: ''
                }
                setUser(singedInUser)
                setLoggedInUser(singedInUser)
                history.replace(from);
            })
            .catch(err => {
                console.log(err);
            })
    }
    // signin with goole end

    //singin with facebook start

    const handleFbSingIn = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider)
            .then(res => {
                const { displayName, photoURL, email } = res.user
                const singedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    image: photoURL,
                    password: '',
                    successs: true,
                    error: ''
                }
                setUser(singedInUser)
                setLoggedInUser(singedInUser)
                history.replace(from);
            })
            .catch(err => {
                console.log(err);
            })
    }

    //singin with facebook end
    return (
        <div className="mainForm">

            { !newUser?
                <>
                    <Form onClick={handleSubmit} className="login-form" style={{ width: '35%', margin: '0 auto' }}>
                        <h5> Login </h5>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleChange} name="email" type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handleChange} name="password" type="password" placeholder="Password" />
                        </Form.Group>

                        <div>
                            <Button className="mainBtn" variant="primary" type="submit">
                                Login
                        </Button>
                        </div>
                        <small> Dont have an account? <span className="f-text" onClick={() => setNewUser(!newUser)}>  Create an account </span> </small>
                        <p> {user.error} </p>
                        {user.success && <p> user {newUser ? 'created' : 'Logged In'} successfull </p>}
                    </Form>
                    
                </>

                :
                <>
                    <Form onClick={handleSubmit} className="login-form" style={{ width: '35%', margin: '0 auto' }}>
                        <h5> Register </h5>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onBlur={handleChange} name="name" type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleChange} name="email" type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handleChange} name="password" type="password" placeholder="Password" />
                        </Form.Group>

                        <div>
                            <Button className="mainBtn" variant="primary" type="submit">
                                Register
                            </Button>
                        </div>
                        <small> Already have an account? <span className="f-text" onClick={() => setNewUser(!newUser)}>  Sing In </span> </small>
                        <p> {user.error} </p>
                        {user.success && <p> user {newUser ? 'created' : 'Logged In'} successfull </p>}
                    </Form>
                </>
            }
            <button onClick={handleGoogleSingIn} className="socialBtn" > Continue with Google </button>
            <button onClick={handleFbSingIn} className="socialBtn" > Continue with Facebook </button>
        </div>
    );
};

export default Login;