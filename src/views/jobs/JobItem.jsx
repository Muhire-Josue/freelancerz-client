import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../styles/main.css';
import '../styles/materialize.min.css';
const Jobs = ({ job }) => {
    const { title, jobType, price, id, stacks, description } = job;
    return (
        <Fragment>
            <section className="section-view-jobs">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m12 view-job">
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title">{title} <strong className="job-type shrink-job-type">{jobType}</strong></span>
                                    <br />
                                    <h5 className="job-price">rwf {price}</h5>
                                    <p>{description.length > 120 ? description.substring(0, 120) : description}</p>
                                    <p className="price-tag gray-text">Required Tech: <span className="price">
                                        {stacks ? stacks.map(stack => (
                                            <span className="tech-tag green">{stack.tech}</span>
                                        )) : (<strong>No Technologies Required</strong>)}
                                    </span></p>
                                </div>
                                <div className="card-action">
                                    <Link to={`job/${id}`} className="btn blue jobs-btn">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Jobs;
