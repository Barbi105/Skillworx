import React, { Component } from 'react';
import API from '../../utils/API';
import "./Profile.css";
import Task from '../Cards/Task';
import { Row, Col } from '../grid/grid';
import { Redirect } from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      jobsApplied: [],
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      image: '',
      skills: [],
    };

  }

  componentDidMount() {
    this.restrictPage();

    const { match: { params } } = this.props;

    if (params.id) {
      this.loadUser(params.id);
    } else {
      this.loadUser(this.state.id)
    }
  }

  // Prevents unauthenticated access
  restrictPage = () => {
    API.getUsers()
      .then(response => {
        if (response.data === "no user") {
          //load page
          this.setState({ redirect: true })
        }
        else {
          this.setState({ jobsApplied: response.data.jobs, id: response.data._id });
        }
      })
  };

  // Get user information from db applied to page
  loadUser = (id) => {
    API.getUserById(id)
      .then(response => {
        this.setState({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          image: response.data.image,
          skills: response.data.skills
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    } else {
      return (
        <div id="profile-jumbotron" className="jumbotron">
          <div className="row mt-3">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3 text-center">
              <img id="user-pic" src={this.state.image} alt="user pic" className="img-thumbnail"></img>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <h1 className="text-right mb-3">{this.state.firstName} {this.state.lastName}</h1>
              <h2 className="text-left">Bio</h2>
              <p className="text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptate labore molestias praesentium nostrum, ipsum, esse fugiat itaque id alias eaque incidunt dolore saepe. Ex culpa nisi iure possimus explicabo!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <h4 className="text-left mb-3">Skills</h4>
              <div id="skill-block">
                {this.state.skills.map(skill => {
                  return (
                    <div className="skill">{skill}</div>
                  );
                })}
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="card" id="job-card">
                <div className="card-body">
                  <h5 className="card-title">Jobs Completed</h5>
                  <ul className="list-group list-group-flush">
                    {this.state.jobsApplied.map(job => {
                      return (
                        <li className="list-group-item">{job.title}</li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Reviews</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}
export default Profile;
