import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import "./App.css";
import "./views/styles/Auth.css"
import store from "./store";
import Register from './views/auth/Register';
import Login from './views/auth/Login';

import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
