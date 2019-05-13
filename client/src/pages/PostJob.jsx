import React from 'react';
import LogoutButton from '../components/Logout/logout';
import PostForm from '../components/postForm/postForm';
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
        <div>
        <LogoutButton />
        <Container fluid>
          <PostForm/>
        </Container>
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
