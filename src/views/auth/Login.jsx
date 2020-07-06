import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import '../styles/Auth.css'

const Login = ({ login, auth: { isAuthenticated } }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData;
    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }
    const onSubmit = e => {
        e.preventDefault();
        login({ email, password });
    }
    if (isAuthenticated) {
        return <Redirect to="/jobs/new"/>
     }
    return (
        <div className="main">

            <div className="container">
                <form className="appointment-form" id="appointment-form" onSubmit={onSubmit}>
                    <h2>Log into your account</h2>
                    <div className="form-group-1">
                        <input type="email" name="email" id="email" value={email} onChange={onChange} placeholder="Email" required />
                        <input type="password" name="password" id="email" value={password} onChange={onChange} placeholder="Password" required />
                        <div className="form-submit">
                            <input type="submit" name="submit" id="submit" className="submit" value="Login" />
                        </div>
                        <div className="form-check">
                            <Link to="/register" className="term-service">Create an account</Link>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

const mapStateToPros = state => ({
    auth: state.auth
})

export default connect(mapStateToPros, { login })(Login);
