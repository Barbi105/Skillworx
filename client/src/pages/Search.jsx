import React from 'react';
// import LogoutButton from '../components/Logout/logout';
// import PostForm from '../components/postForm/postForm';
import Task from '../components/Cards/Task';
import API from '../utils/API';
import {Container, Row, Col} from '../components/grid/grid';
import { Redirect } from 'react-router-dom';
// import { stringify } from 'querystring';

class Search extends React.Component {
  state = {
    redirect: false,
    jobSearch: "",
    jobs: []
  };

  componentDidMount(){  
   this.loadJobs();
   this.restrictPage();
  }

  //prevents unauthorized users to acces page
  restrictPage = () => {
  API.getUsers()
  .then((req, res) => {
      console.log(req);
      console.log(req.user);
      if (req.data !== "no user") {
        //load page
        res.json("/login", req.data);
      } else {
        this.setState({ redirect: true })
      }
    })
    .catch(err => console.log(err));
  };

  //automatically createa card for each job posted
  loadJobs = () => {
    API.getJobs()
      .then(res => this.setState({ jobs: res.data }))
      .catch(err => console.log(err));
  };

  loadUser = () => {
    API.getUserById()
      .then(res => this.setState({user: res.data}))
      .catch(err => console.log(err));
  }

  render(){
    if (this.state.redirect) {
      return <Redirect to="/" />
    } else {
      return (
<Container fluid>
        <Row fluid>
          <Col col-md-12>
            <div className="mb-3">
              <p>Search for Jobs</p>
              {/* <Row>
                <Col col-md-12>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="jobSearch"
                      value={this.state.jobSearch}
                      onChange={this.handleInputChange}
                      placeholder="Search for jobs"
                      aria-label="bookSearch"
                      aria-describedby="button-addon2"
                    />
                    <div className="input-group-append">
                      <Button type="outline-secondary" onClick={this.handleFormSubmit}>Search</Button>
                    </div>
                  </div>
                </Col>
              </Row> */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col col-md-12>
            <div className="p-3">
              <p>Results</p>
              <Row>
                <Col col-md-4>
                  <div className="p-3">
                      {this.state.jobs.map(job => {
                        return (
                          <Task
                            key={job.title}
                            title={job.title}
                            zipcode={job.zipcode}
                            description={job.description}
                            date={job.date}
                            payRate={job.payRate}
                          />
                        );
                      })}
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

        // <div>
        //   <LogoutButton />
        //   <br/>
        //   <Task/>
        //   <PostForm />
        // </div>
      )
    }
  }

}
export default Search;
