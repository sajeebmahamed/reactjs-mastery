import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { firebaseConfig } from '../../firebase.config';
const firebase = require("firebase/app");
require("firebase/auth");

if(!firebase.app.length) {
    firebase.initializeApp(firebaseConfig)
}
const Login = () => {
    const [newUser, setNewUser] = useState(false)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        success: false,
        error: ''
    })
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSingIn = (e) => {
        e.preventDefault()
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, photoURL, email } = res.user
                const singedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(singedInUser)
                setLoggedInUser(singedInUser)
                history.replace(from);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleGoogleSingOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const singedOutUser = {
                    isSignedIn: '',
                    name: '',
                    email: '',
                    photo: '',
                    password: ''
                }
                setUser(singedOutUser)
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
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
    const handleSubmit = (e) => {
        if(newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = {...user}
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setUser(newUserInfo)
                    updateUserInfo(user.name)
                })
                .catch(err => {
                    const newUserInfo = {...user}
                    newUserInfo.error = err.message
                    newUserInfo.success = false
                    setUser(newUserInfo)
                })
        }
        if(!newUser && user.email && user.password) {
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

    return (
        <div className="text-center">
            {
                user.isSignedIn &&
                (
                    <div>
                        <p> name : {user.name} </p>
                        <p> email : {user.email} </p>
                        <img src={user.photo} alt="img" />
                    </div>
                )
            }
            {
                user.isSignedIn ?
                    <Button onClick={handleGoogleSingOut}> Sign out</Button>
                    :
                    <Button onClick={handleGoogleSingIn}> Sign in with google </Button>
            }
            <div>
                <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" />
                <label htmlFor="newUser"> New User Sign Up </label>
                <Form onClick={handleSubmit} style={{width: '50%', margin:'0 auto'}}>

                    {
                        newUser && 
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" onBlur={handleChange} type="text" placeholder="Enter Name" />
                        </Form.Group>
                    }

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" onBlur={handleChange} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" onBlur={handleChange} type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                    <p> {user.error} </p>
                    {user.success && <p> user {newUser ? 'created': 'Logged In'} successfull </p> }
            </div>
        </div>
    );
};

export default Login;