import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import CheckOut from './components/CheckOut/CheckOut';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin';

export const UserContext = createContext();

function App(props) {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/admins'>
            <Admin />
          </Route>
          <PrivateRoute path='/checkOut/:bookId'>
            <CheckOut />
          </PrivateRoute>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
