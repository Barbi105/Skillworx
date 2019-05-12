import React from 'react';
import LogoutButton from '../components/Logout/logout'
import API from '../utils/API';
import { Redirect } from 'react-router-dom';
class Search extends React.Component {
  
  state = {
    redirect: false
  };

  componentDidMount(){

    API.getUsers()
      .then((req, res) => {
        console.log(req.user);
        console.log(res);
        if (res) {
          //load page
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
          You shouldn't be here?
        </div>
      )
    }
  }

}
export default Search;
