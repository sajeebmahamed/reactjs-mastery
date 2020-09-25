import React, { createContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllPost from './components/AllPost/AllPost';
import SinglePost from './components/AllPost/SinglePost/SinglePost';
import Comments from './components/Comments/Comments';
import Header from './components/Header/Header';

export const UserContext = createContext()

function App() {
  const [users, setUsers] = useState([])
  const [usersPost, setUsersPost] = useState([])

  // console.log(usersPost);
  useEffect(() => {
    async function Users() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      setUsers(data)
    }
    Users()
    async function UsersPost() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/?results=10')
      const data = await res.json()
      setUsersPost(data)
    }
    UsersPost()
  }, [])

  const [pic, setPic] = useState([])
  useEffect(() => {
    async function RandomPic() {
      const res = await fetch('https://randomuser.me/api/?results=10')
      const data = await res.json()
      setPic(data.results)
      // console.log(data);
    }
    RandomPic()
  }, [])

  return (
    <Router>
      <UserContext.Provider value={[users, usersPost]}>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <AllPost pic={pic}></AllPost>
          </Route>
          <Route path="/user/:id">
            <SinglePost></SinglePost>
            <Comments pic={pic}></Comments>
          </Route>
          <Route path="/comments/:id">
            {/* <Comments></Comments> */}
          </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
