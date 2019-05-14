import React, {Component} from 'react'
// import { Redirect } from "react-router-dom";
import API from "../../utils/API"

export class ApplyButton extends Component {
    handleApply = event => {
        event.preventDefault();
        console.log("clicked on button")
        API.saveJobById(this.props._id).then((res)=>{
          console.log(res.data);
        })
        }
      render(){
        // if (this.state.redirectTo) {
        //     return <Redirect to={this.state.redirectTo} />
        //   }
  return (

    <div> 
        <button className="btn-primary w-100" onClick={this.handleApply}  type="submit">Apply</button>
    </div>
    
  )
}
}

export default ApplyButton;