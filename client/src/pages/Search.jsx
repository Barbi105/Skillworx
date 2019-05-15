import React from 'react';
import LogoutButton from '../components/Logout/logout';
import Task from '../components/Cards/Task';
import API from '../utils/API';
import Footer from '../components/footer/footer'
import "./search.css"
import { Container, Row, Col } from '../components/grid/grid';
import { Redirect } from 'react-router-dom';
import moment from "moment";
// import { stringify } from 'querystring';

class Search extends React.Component {
  state = {
    redirect: false,
    jobSearch: "",
    jobs: [],
    type: ''
  };

  componentDidMount() {
    this.loadJobs();
    this.restrictPage();
  }


  
  // componentDidUpdate(prevState){
  //   this.loadJobType(this.state.type);
  // }

  //prevents unauthorized users to acces page
  restrictPage = () => {
    API.getUsers()
      .then(response => {
        console.log(response);
        if (response.data === "no user") {
          //load page
          this.setState({ redirect: true })
        }
      });
  };

  loadJobType = (type) => {
    if(type ==="All") {
      this.loadJobs();
    }else{
      API.getJobByType(type)
      .then(res => this.setState({ jobs: res.data }))
      .catch(err => console.log(err));
    }
    
  }
  // automatically create a card for each job posted
  // populate all with creatorBy
  loadJobs = () => {
    API.getJobs()
      .then(res => this.setState({ jobs: res.data }, () => console.log("new data:", this.state.jobs)))
      .catch(err => console.log(err));
  };

  loadUser = () => {
    API.getUserById()
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  handleSearch = (e) => {
    e.preventDefault();
    console.log(this.state.type);
    this.loadJobType(this.state.type);
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    let name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };


  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    } else {
      return (
        <div>
          <Navbar />
          <div class="jumbotron searchJumbotron">
            <Container fluid>
              <Row fluid>
                <Col col-md-12>

                  <h2 id="searchTag">Search for Jobs: </h2>
                </Col>
                </Row>
                <Row>
                  <div className='col-md-12 d-flex'>

                    <select id="selectTypeMenu" name="type" onChange={this.handleInputChange}>
                      <option value="" disabled selected>Choose type</option>
                      <option value="All">Show All</option>
                      <option value="Housework">Housework</option>
                      <option value="Yardwork">Yardwork</option>
                      <option value="Furniture Assembly">Furniture Assembly</option>
                      <option value="Tutoring">Tutoring</option>
                      <option value="Pet Care">Pet Care</option>
                      <option value="IT">IT</option>
                      <option value="Misc">Misc</option>
                      </select>
                      {/* <button  onClick={this.handleSearch}>
                        Search
                      </button> */}
                    </div>
 
                    {/* <div className='col-md-6'>
                   

                    </div>  */}


              </Row>

            </Container>
          </div>
          <div className="jumbotron resultsJumbotron">
            <Row>
              <Col col-md-12>
                <div className="p-3">
                  <p>Results</p>
                  <Row>
                    <Col col-md-4>
                      <div className="p-3">
                        {this.state.jobs.map(job => {
                          return (
                            <div id="task-card-container" className='col-12 col-sm-12 col-md-4 col-lg-4'>
                            <Task
                              key={job.title}
                              _id={job._id}
                              image={job.createdBy.image}
                              title={job.title}
                              zipcode={job.zipcode}
                              description={job.description}
                              date={moment(job.date).format("MM/DD/YYYY")}
                              payRate={job.payRate}
                              createdById={job.createdBy._id}
                              name={job.createdBy.firstName}
                            />
                          );
                        })}
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container> */}
          <Navbar/>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 id="search-heading" className="text-center">Find an opportunity</h1>
              </div>
              <div className="col-12 form-group d-flex">
                <select className="custom-select" name="type" onChange={this.handleInputChange}>
                  <option value="" disabled selected>Select your option</option>
                  <option value="Housework">Housework</option>
                  <option value="Yardwork">Yardwork</option>
                  <option value="Furniture Assembly">Furniture Assembly</option>
                  <option value="Tutoring">Tutoring</option>
                  <option value="Pet Care">Pet Care</option>
                  <option value="IT">IT</option>
                  <option value="Misc">Misc</option>
                </select>
                <button onClick={this.handleSearch}>
                  Search
                </button>
              </div>
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
          </div>
          <Footer />
        </div>

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
