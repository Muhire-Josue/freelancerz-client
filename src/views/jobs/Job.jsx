import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GetJob } from '../../actions/jobs';


import '../styles/main.css';
import '../styles/materialize.min.css';


const Job = ({ job: { job }, GetJob }) => {
    const { jobId } = localStorage;
    useEffect(() => {
        GetJob(jobId);
    }, [GetJob, jobId])
    const { title, jobType, description, price, yearsOfExperience, startDate, endDate } = job;
    console.log('job ==>', job)
    const { firstName, lastName, email, phoneNumber, linkedIn } = job.jobOwner;
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
                                    <span className="card-title">{title}</span>
                                    <strong className="job-type">{jobType}</strong>
                                    <p><strong>Description: </strong> {description} </p>
                                    <br />
                                    <p className="price-tag gray-text">Price: <span className="price"> rwf{price}</span></p>
                                    <p className="price-tag gray-text">Years of experience required: <span className="price"> {yearsOfExperience} years</span></p>
                                    <p className="price-tag gray-text">Start Date: <span className="price"> {startDate}</span></p>
                                    <p className="price-tag gray-text">End Date: <span className="price"> {endDate}</span></p>
                                    <p className="price-tag gray-text">Required Tech: <span className="price">
                                        <span className="tech-tag green">React</span>{' '}
                                        <span className="tech-tag green">Nodejs</span>{' '}
                                        <span className="tech-tag green">Express</span>{' '}
                                    </span></p>
                                </div>
                                <div class="card-action">
                                    <span class="card-title">Client Info</span>
                                    <p><strong>Names:</strong> {firstName} {lastName}</p>
                                    <p><i class="fas fa-paper-plane"></i> {email} </p>
                                    <p><i class="fas fa-phone"></i> {phoneNumber}</p>
                                        <Link to="#" target="blank" class="btn customize-this-btn" href={linkedIn}> <i class="fab fa-linkedin"></i> LinkedIn Profile
                                </Link>
                                        <br />
                                        <br />
                                        <button href="#" class="btn blue move-right">Apply <i class="fas fa-check"></i>

                                        </button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    )
}
const mapStateToPros = state => ({
                job: state.job
})
export default connect(mapStateToPros, { GetJob})(Job);
