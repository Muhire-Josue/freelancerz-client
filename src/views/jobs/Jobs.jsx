import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { GetAllJobs } from '../../actions/jobs';
import JobItem from '../../views/jobs/JobItem';

const Jobs = ( {job, GetAllJobs } ) => {
    useEffect(() => {
        GetAllJobs()
    }, [GetAllJobs])
    return (
        <Fragment>

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
                <div className="jobs-bg-img">
                    <h4 className="center showcase-jobs"> Available Jobs</h4>
                </div>
            </header>
            <br />
            <br />
            <section className="section-jobs-search">
                <div className="container resize-job-container">
                    <div className="row">
                        <div className="col s12 m12 ">
                            <form>
                                <div className="input-field col s6 m6">
                                    <input id="search" type="text" className="validate search-bar white" required />
                                    <label htmlFor="search"><i className="material-icons left">search</i> What are you looking
                                for?</label>
                                    <button className="waves-effect waves-light btn blue">Find</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            /</section>
            </div>
            { job.jobs.length > 0 && job.jobs.map(job => ( <JobItem key={job.id} job={job}/>)) }
        </Fragment>

    )
}
const mapStateToPros = state => ({
    job: state.job
});

export default connect(mapStateToPros, { GetAllJobs })(Jobs);
