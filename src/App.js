import React from "react";
import { Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import Register from './views/auth/Register';
import Login from './views/auth/Login';
import AddJob from './views/jobs/AddJob'
import Jobs from './views/jobs/Jobs';
import Job from './views/jobs/Job';
import JobApplication from './views/applications/JobApplication'
import Application from './views/applications/Application'


function App() {
    return (
        <Provider store={store} >
            <ToastContainer />
            <Router >
                <Switch >
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' render={(props) => <Login props />} />
                    <Route exact path='/jobs' render={(props) => !localStorage.token ? Redirect('/login') : <Jobs />}  />
                    <Route exact path='/job/:id' render={(props) => !localStorage.token ? Redirect('/login') : <Job {...props} />}  />
                    <Route exact path='/jobs/new' render={(props) => !localStorage.token ? Redirect('/login') : <AddJob />} />
                    <Route exact path='/applications/:id' render={(props) => !localStorage.token ? Redirect('/login') : <JobApplication {...props}/>} />
                    <Route exact path='/application/:id' render={(props) => !localStorage.token ? Redirect('/login') : <Application {...props}/>} />
                </Switch>
            </Router>
        </Provider >
    )
}

export default App;
