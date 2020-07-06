import React, { Fragment } from 'react';

const NavBar = () => {
    return (
        <Fragment>
            <header class="site-navbar py-1" role="banner">

                <div class="container">
                    <div class="row align-items-center">

                        <div class="col-6 col-xl-2">
                            <h1 class="mb-0"><a href="jobs.html" class="text-black h2 mb-0">Freelancerz</a></h1>
                        </div>

                        <div class="col-10 col-xl-10 d-none d-xl-block">
                            <nav class="site-navigation text-right" role="navigation">

                                <ul class="site-menu js-clone-nav mr-auto d-none d-lg-block">
                                    <li><a href="./jobs.html">Home</a></li>
                                    <li><a href="search.html">Search</a></li>
                                    <li><a href="jobs.html">Jobs</a></li>
                                    <li><a href="addComplaint.html">Complaint</a></li>
                                    <li><a href="addJob.html"><span class="rounded bg-primary py-2 px-3 text-white"><span class="h5 mr-2">+</span> Post a Job</span></a></li>
                                    <li><a href="login.html">Logout</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div class="col-6 col-xl-2 text-right d-block">

                            <div class="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style="position: relative; top: 3px;"><a href="#" class="site-menu-toggle js-menu-toggle text-black"><span class="icon-menu h3"></span></a></div>

                        </div>

                    </div>
                </div>

            </header>
        </Fragment>
    )
}

export default NavBar;
