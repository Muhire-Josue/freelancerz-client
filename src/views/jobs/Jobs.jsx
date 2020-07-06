import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Jobs = () => {
    return (
        <Fragment>
            <div className="site-wrap">

                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>


                <header className="site-navbar py-1" role="banner">

                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-6 col-xl-2">
                                <h1 className="mb-0"><a href="jobs.html" className="text-black h2 mb-0">Freelancerz</a></h1>
                            </div>

                            <div className="col-10 col-xl-10 d-none d-xl-block">
                                <nav className="site-navigation text-right" role="navigation">

                                    <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                                        <li><a href="./jobs.html">Home</a></li>
                                        <li className="has-children" />
                                        <li><a href="search.html">Search</a></li>
                                        <li><a href="jobs.html">Jobs</a></li>
                                        <li><a href="addComplaint.html">Complaint</a></li>
                                        <li><a href="addJob.html"><span className="rounded bg-primary py-2 px-3 text-white"><span className="h5 mr-2">+</span> Post a Job</span></a></li>
                                        <li><a href="login.html">Logout</a></li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="col-6 col-xl-2 text-right d-block">

                                <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{position: "relative", top: "3px"}}><Link to="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></Link></div>

                            </div>

                        </div>
                    </div>
                </header>
                <div class="unit-5 overlay" style={{ backgroundImage: "url('https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?cs=srgb&dl=abstract-business-code-coder-270348.jpg&fm=jpg')" }} dataAos="fade" data-stellar-background-ratio="0.5">
            <div class="container text-center">w
                <h2 class="mb-0">Post a Job</h2>
            </div>
        </div>
            </div>
        </Fragment>
    )
}

export default Jobs;
