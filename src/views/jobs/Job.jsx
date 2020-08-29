import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GetJob } from '../../actions/jobs';
import { jobApplication } from '../../actions/application';


import '../styles/main.css';
import '../styles/materialize.min.css';


const Job = ({ GetJob, job: { job }, match, jobApplication }) => {
    const { id } = match.params;
    useEffect(() => {
        GetJob(id);
    }, [GetJob, id])
    const { title, jobType, description, price, yearsOfExperience, startDate, endDate } = job;
    const { firstName, lastName, email, phoneNumber, linkedIn } = job?.jobOwner || {};
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
                <div className="job-bg-img">
                    <h4 className="center showcase-jobs"> Job Details</h4>
                </div>
            </header>
            <section className="section-job">
                <div className="row">
                    <div className="container">
                        <div className="col s12 m12">
                            <div className="card">
                                <div className="card-content">
                                    <p> <span className="card-title">{title}</span> <strong className="job-type">{jobType}</strong></p>
                                    <p><strong>Description: </strong> {description} </p>
                                    <br />
                                    <p className="price-tag gray-text">Price: <span className="price"> rwf {price}</span></p>
                                    <p className="price-tag gray-text">Years of experience required: <span className="price"> {yearsOfExperience} years</span></p>
                                    <p className="price-tag gray-text">Start Date: <span className="price"> {new Date(startDate).toDateString()}</span></p>
                                    <p className="price-tag gray-text">End Date: <span className="price"> {new Date(endDate).toDateString()}</span></p>
                                    <p className="price-tag gray-text">Required Tech: <span className="price">
                                        {job.stacks ? job.stacks.map(stack => (
                                            <span className="tech-tag green">{stack.tech}</span>
                                        )) : (<strong>No Technologies Required</strong>)}
                                    </span></p>
                                </div>
                                <div className="card-action">
                                    <span className="card-title">Client Info</span>
                                    <p><i class="fas fa-user"></i> {firstName} {lastName} </p>
                                    <p><i className="fas fa-paper-plane"></i> {email} </p>
                                    <p><i className="fas fa-phone"></i> {phoneNumber}</p>
                                    <br />
                                    <a href={linkedIn} target="blank" className="btn customize-this-btn"> <i className="fab fa-linkedin"></i> LinkedIn Profile</a>
                                    <button onClick={() => jobApplication(id)} className="btn blue move-right">Apply <i className="fas fa-check"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
const mapStateToProps = state => ({
    job: state.job
})
export default connect(mapStateToProps, { GetJob, jobApplication })(Job);
