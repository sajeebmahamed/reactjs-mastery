import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { firebaseConfig } from '../../firebase.config';
const firebase = require("firebase/app");
require("firebase/auth");

firebase.initializeApp(firebaseConfig)

const LoginMySelft = () => {
    const [newUser, setNewUser] = useState(true)
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        image: '',
        success: false,
        error: ''
    })
    const handleChange = (e) => {
        e.preventDefault()
        const newUserInfo = {...user}
        newUserInfo[e.target.name] = e.target.value
        setUser(newUserInfo)
    }
    const handleSubmit = (e) => {
        
        if(newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = {...user}
                    newUserInfo.success = true
                    newUserInfo.error = ''
                    updateUserInfo(user.name)
                })
                .catch(err => {
                    const newUserInfo = {...user}
                    newUserInfo.error = err.message
                    newUserInfo.success = false
                    console.log(err.message);
                })
        }
        if(!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.success = true
                    newUserInfo.error = ''
                })
                .catch(err => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = err.message
                    newUserInfo.success = false
                    console.log(err.message);
                })

        }
        e.preventDefault();
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
    const provider = new firebase.auth.GoogleAuthProvider();
    const handeGoogleSingIn = (e) => {
        e.preventDefault()
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                console.log(res);
                const { displayName, photoURL, email } = res.user
                const singInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    image: photoURL
                }
                setUser(singInUser)
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div>
            {
                newUser ?
                <Form onClick={handleSubmit} style={{ width: '50%', margin: '0 auto' }}>
                <h5> Register </h5>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" onBlur={handleChange} type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" onBlur={handleChange} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" onBlur={handleChange} type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                        <small> Already have an account? <span onClick={() => setNewUser(!newUser)}>  Sing In </span> </small>
                        <p className="bg-danger"> {user.error} </p>
                        <p> {user.success && 'Account created successfull'} </p>
                    </Form>
                        
                       
                :
                    <>
                        <h5> Login </h5>
                        <Form onClick={handleSubmit} style={{ width: '50%', margin: '0 auto' }}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" onBlur={handleChange} type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" onBlur={handleChange} type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                            <small> Dont have an account? <span onClick={() => setNewUser(!newUser)}>  Sing Up </span> </small>
                            <p> {user.error} </p>
                            {user.success && <p> Loged in successfull </p>}
                            <button onClick={handeGoogleSingIn}> continue with google </button>
                        </Form>
                    </>
            }
            
            
        </div>
    );
};

export default LoginMySelft;