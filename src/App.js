import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Booking from './components/Booking/Booking';
import Login from './components/Authenticate/Login';
import Signup from './components/Authenticate/Signup';
import PrivateRoute from './components/ProtectedRoute/ProtectedRoute';
import Search from './components/Search/Search';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});
  return (
    <>
    <UserContext.Provider value={[user, setUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/booking/:slug">
              <Booking></Booking>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute path="/search">
              <Search></Search>
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
