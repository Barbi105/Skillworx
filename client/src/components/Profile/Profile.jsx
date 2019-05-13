import React, {Component} from 'react';
import API from '../../utils/API';
import "./Profile.css";
import Task from '../Cards/Task';
import {Row, Col} from '../grid/grid';
import { Redirect } from 'react-router-dom';

class Profile extends Component {
  state = {
    redirect: false,
    jobsApplied: []
  }

  componentDidMount() {
    // this.loadJobs();
    this.restrictPage();
  }

  //prevents unauthorized users to acces page
  restrictPage = () => {
    API.getUsers()
      .then(response => {
        console.log(response);
        if (response.data === "no user") {
          //load page
          this.setState({ redirect: true })
        }
        else {
          this.setState({ jobsApplied: response.data.jobs });
        }
      })
    };

    // adds jobs applied to page
    // loadJobs = () => {
    //   console.log("am i running");
    //   API.getUserJobs()
    //     .then(res => {
    //       console.log("jobs array:", res.data.jobs);
    //       this.setState({ jobsApplied: res.data.jobs });
    //     })
    //     .catch(err => console.log(err));
    // };

    render() {
      if (this.state.redirect) {
        return <Redirect to="/" />
      } else {
        return (
          <div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3">
                <img id="user-pic" src="./assets/images/elizabethMiller.jpg" alt="user pic"></img>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <h1 className="text-right mb-3">Elizabeth Miller</h1>
                <h2 className="text-left">Bio</h2>
                <p className="text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptate labore molestias praesentium nostrum, ipsum, esse fugiat itaque id alias eaque incidunt dolore saepe. Ex culpa nisi iure possimus explicabo!
        </p>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <h4 className="text-left mb-3">Skills</h4>
                {/* <ul>
          <li>Painting</li>
          <li>Coding</li>
          <li>Cleaning</li>
          <li>Mentoring</li>
        </ul> */}
                <div id="skill-block">
                  <div className="skill">Painting</div>
                  <div className="skill">Coding</div>
                  <div className="skill">Cleaning</div>
                  <div className="skill">Mentoring</div>

                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="card">
                  <p>reviews</p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="card">
                  <p>Jobs</p>
                  <Row>
                    <Col col-md-4>
                      <div className="p-3">
                        <ul>
                          {this.state.jobsApplied.map(job => {
                            return (
                              // <Task
                              //   key={job.title}
                              //   title={job.title}
                              //   // zipcode={job.zipcode}
                              //   description={job.description}
                              //   date={job.date}
                              //   // payRate={job.payRate}
                              // />

                              <li>{job.title}</li>
                            );
                          })}
                          </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>

        )
      }
    }
  }
  export default Profile;
