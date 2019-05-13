import React, {Component} from 'react'
import { Redirect } from "react-router-dom";
// import API from "../../utils/API"

export class ApplyButton extends Component {
    state={
        redirectTo:null
    };
   
    handleApply = event => {
        // event.preventDefault();
        // API.logoutUser().then((res)=>{
        //     this.setState({ redirectTo: res.data });
        //   }).catch(err => {
        //     console.log(err);
        //   })
        }
      render(){
        if (this.state.redirectTo) {
            return <Redirect to={this.state.redirectTo} />
          }
  return (

    <div> 
        <button onClick={this.handleApply}  type="submit">Apply</button>
    </div>
    
  )
}
}

export default ApplyButton;