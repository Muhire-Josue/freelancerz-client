import React from 'react';
import { Link } from 'react-router-dom';

const ApplicantCard = ({ applicant }) => {
  const { firstName, lastName } = applicant.users;
  const { recommendation } = applicant;
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <img src='https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt="" />
        </div>
        <div className="card-content">
          <p className="card-title">{firstName} {lastName} <span className="recommendation-tag green">{recommendation} </span></p>
          <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <Link to="/profile" className="btn blue">Profile</Link>
          <button className="btn green">Approve</button>
        </div>
      </div>
    </div>
  )
}

export default ApplicantCard
