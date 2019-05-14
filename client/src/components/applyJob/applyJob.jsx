import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import API from "../../utils/API"

export class ApplyButton extends Component {

  componentDidMount() {
  }

  handleApply = event => {
    event.preventDefault();
    API.saveJobById(this.props._id)
      .then(res => {
        console.log(res.data)
        // Redirect page in profile path of creator
        this.props.history.push(`/users/${this.props.createdById}`);
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleApply}>Apply</button>
      </div>

    )
  }
}

export default withRouter(ApplyButton);