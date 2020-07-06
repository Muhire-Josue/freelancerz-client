import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createJob } from '../../actions/jobs';
import { Select, MenuItem, makeStyles} from '@material-ui/core';

import '../styles/main.css';
import '../styles/materialize.min.css';

const AddJob = ({ createJob }) => {

    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
    }));

    const classes = useStyles();
    
    const [jobData, setJobData] = useState({
        title: '',
        price: '',
        yearsOfExperience: '',
        startDate: '',
        endDate: '',
        jobType: '',
        description: ''
    });
    const { title, price, yearsOfExperience, startDate, endDate, jobType, description } = jobData;
    if (!localStorage.token) {
        return <Redirect to="/login" />
    }
    const onChange = e => {
        setJobData({ ...jobData, [e.target.name]: e.target.value });
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await createJob({ title, price: parseInt(price), yearsOfExperience, startDate, endDate, jobType, description });
    }
    return (
        <div className="blue-grey lighten-5 bg-color">
            <header>
                <nav className="blue darken-1">
                    <div className="nav-wrapper">
                        <Link to="#" className="brand-logo">Freelancerz</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="#">Home</Link></li>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Services</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="showcase-add-job">
                    <h4 className="center showcase-jobs">Post A Job</h4>
                </div>
            </header>
            <section className="section_add-job">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m12">
                            <div className="card">
                                <div className="card-content">
                                    <div className="row">
                                        <form className={classes.formControl} onSubmit={onSubmit}>
                                            <div className="input-field">
                                                <input id="title" type="text" name='title' value={title} onChange={onChange} required />
                                                <label htmlFor="title">Title</label>
                                            </div>
                                            <div className="input-field">
                                                <input id="price" type="text" name='price' value={price} onChange={onChange} required />
                                                <label htmlFor="price">Price</label>
                                            </div>
                                            <div className="input-field">
                                                <input id="yearsOfExperience" type="text" name='yearsOfExperience' value={yearsOfExperience} onChange={onChange} required />
                                                <label htmlFor="yearsOfExperience">Years Of Experience</label>
                                            </div>
                                            <p>
                                                <label htmlFor="startDate">Start Date</label>
                                                <input type="text" className="datepicker" id="startDate" name="startDate" value={startDate} onChange={onChange} required />
                                            </p>
                                            <p>
                                                <label htmlFor="end-date">End Date</label>
                                                <input type="text" className="datepicker" id="end-date" name="endDate" value={endDate} onChange={onChange} required />
                                            </p>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                            <br />
                                            <br />
                                            <br />
                                            <p>
                                                <input type="radio" name="jobType" id="full-time" value="full-time" onChange={onChange} required />
                                                <label htmlFor="full-time">Full-Time</label>
                                            </p>
                                            <p>
                                                <input type="radio" name="jobType" id="part-time" value="part-time" onChange={onChange} required />
                                                <label htmlFor="part-time">Part-time</label>
                                            </p>
                                            <div className="input-field">
                                                <i className="material-icons prefix">mode_edit</i>
                                                <textarea placeholder="Project Description (at least 100 words)" id="message" name="description"
                                                    className="materialize-textarea" value={description} onChange={onChange} required></textarea>
                                            </div>
                                            <div>
                                                <button className="waves-effect waves-light btn blue"><i className="material-icons left">send</i>Create</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default connect(null, { createJob })(AddJob);
