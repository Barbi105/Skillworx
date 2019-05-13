import React, { Component } from 'react'
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"

const stripe_public = "pk_test_cVjeizBaQC8OvkByw3eifqTy00me7YbVVP";





export class payTest extends Component {
  state={
    amount: 5.42
  }

  handleClick = () => {
    //when clicks stripes pay window will appear 
    axios.post("/pay", "string");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Pay $5.42</button>
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_cVjeizBaQC8OvkByw3eifqTy00me7YbVVP"
        />    
      </div>
    )
  }
}

export default payTest
