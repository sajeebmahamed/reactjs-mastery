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
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      setUsersPost(data)
    }
    UsersPost()
  }, [])

  // const handleClick = () => {
  //     console.log("clicked");
  // }

  return (
    <Router>
      <UserContext.Provider value={[users, usersPost]}>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <AllPost></AllPost>
          </Route>
          <Route path="/user/:id">
            <SinglePost></SinglePost>
            <Comments></Comments>
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
