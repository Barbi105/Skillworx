import React, {Component} from 'react'
import { Redirect } from "react-router-dom";
import API from "../../utils/API"
import './logout.css'

export class LogoutButton extends Component {
    state={
        redirectTo:null
    };
   
    handleLogout = event => {
        event.preventDefault();
        API.logoutUser().then((res)=>{
            this.setState({ redirectTo: res.data });
          }).catch(err => {
            console.log(err);
          })
        }
      render(){
        if (this.state.redirectTo) {
            return <Redirect to={this.state.redirectTo} />
          }
  return (

    <div> 
        <button id='logout-submit' onClick={this.handleLogout}  type="submit">Logout</button>
    </div>
    
  )
}
}

export default LogoutButton;
