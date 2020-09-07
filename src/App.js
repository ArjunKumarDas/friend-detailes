
// https://jsonplaceholder.typicode.com/users  = api link
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Nomatch from './components/NoMatch/Nomatch';
import FriendDetail from './components/FriendDetail/FriendDetail';


function App() {
 
  return (
  
      <Router>
          <Switch>
             <Route path="/home">
                <Home></Home>
             </Route>
             <Route exact path="/">
                <Home></Home>
             </Route>
             <Route path="/about/:friendId">
                 <FriendDetail></FriendDetail>
             </Route>
             <Route path="*">
                 <Nomatch></Nomatch>
             </Route>
          </Switch>
      </Router>
     
 
  );
}

export default App;
