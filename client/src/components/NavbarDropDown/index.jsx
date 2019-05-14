import React, {Component} from 'react';
import API from '../../utils/API';

class DropDown extends Component {
    state={
        firstName: "",
        lastName: "",
        id: ""
    }
    componentDidMount(){
        this.getUser();
    }
    
    // Get user information from db applied to page
      getUser = () => {
        API.getUsers()
          .then(response => {
            this.setState({
              firstName: response.data.firstName,
              lastName: response.data.lastName,
              id: response.data._id
            });
          })
          .catch(err => console.log(err));
      };   
      render(){
          return(
              <div>
            <p>{this.state.firstName} {this.state.lastName}</p>
              </div>
          )
      }
}
export default DropDown