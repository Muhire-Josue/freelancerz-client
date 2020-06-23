import React, { useState } from 'react';
import { Link,Redirect } from 'react-router-dom';
import { createUserAccount } from '../actions/auth';
import { connect } from 'react-redux';

const Register = ({ createUserAccount, auth: { isAuthenticated } }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        userTypeId: ''
    });
    const { firstName, lastName, email, password, phoneNumber, userTypeId } = formData;
    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await createUserAccount({ firstName, lastName, email, password, phoneNumber, userTypeId:  parseInt(userTypeId) });
    }
    if (isAuthenticated) {
       return <Redirect to="/home"/>
    }
    return (
        <div className="main">

            <div className="container">
                <form className="appointment-form" id="appointment-form" onSubmit={onSubmit}>
                    <h2>Create your account</h2>
                    <div className="form-group-1">
                        <input type="text" name="firstName" value={firstName} onChange={onChange} id="title" placeholder="First name" required />
                        <input type="text" name="lastName" value={lastName} onChange={onChange} id="name" placeholder="Last Name" required />
                        <input type="email" name="email" value={email} onChange={onChange} id="email" placeholder="Email" required />
                        <input type="password" name="password" value={password} onChange={onChange} id="password" placeholder="Password" required />
                        <input type="number" name="phoneNumber" value={phoneNumber} onChange={onChange} id="phone_number" placeholder="Phone number" required />
                        <div className="select-list">
                            <select name="userTypeId" value={userTypeId} onChange={onChange} id="course_type">
                                <option value="invalid">User type</option>
                                <option value="1">Client</option>
                                <option value="2">Software Developer</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group-2">
                        <h3>Please provide the below information</h3>
                        <div className="form-group-1">
                            <input type="text" name="linkedin" id="title" placeholder="LinkedIn profile" />
                            <input type="text" name="github-username" id="title" placeholder="GitHub username" />
                        </div>
                        <div className="form-submit">
                            <input type="submit" name="submit" id="submit" className="submit" value="Create account" />
                        </div>
                        <div className="form-check">
                            <Link to="/login" className="term-service">Log into your account</Link>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { createUserAccount })(Register);
