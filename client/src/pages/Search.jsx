import React from 'react';
import LogoutButton from '../components/Logout/logout';
import PostForm from '../components/postForm/postForm';
import API from '../utils/API'
import { Redirect } from 'react-router-dom';
class Search extends React.Component {
  
  state = {
    redirect: false
  };

  componentDidMount(){
    
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
   
  }

  render(){
    if (this.state.redirect) {
      return <Redirect to="/" />
    } else {
      return (
        <div>
          <LogoutButton />
          <br/>
          <PostForm />
        </div>
      )
    }
  }

}
export default Search;
