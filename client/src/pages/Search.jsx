import React from 'react';
import LogoutButton from '../components/Logout/logout'
import API from '../utils/API';
import { Redirect } from 'react-router-dom';
class Search extends React.Component {

  state = {
    redirect: false
  };

  componentDidMount() {

    API.getUsers()
      .then(response => {
        console.log(response);
        if (response.data === "no user") {
          //load page
          this.setState({ redirect: true })
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    } else {
      return (
        <div>
          <LogoutButton />
        </div>
      )
    }
  }

}
export default Search;
