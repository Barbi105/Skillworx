import React from 'react';
import "./kittystar.css";

export class Star extends Component{
    constructor(props) {
        super(props);
        this.state = {value: null};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
   
    handleSubmit = event => {
        event.preventDefault();
        this.setState({value: event.target.value});
        API.updateUser(this.state)
            .then((res) => console.log(res.data));

        }

    render() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Document</title>
          <meta charSet="UTF-8" />
          <link rel="stylesheet" type="text/css" href="kittystar.css" />
          <title>Star rating</title>
          <form onSubmit={this.handleSubmit}>
          
          <div className="rate">
          <select value={this.state.value} onChange={this.handleChange}>
            <input type="radio" id="star5" name="rate" value={5} />
            <label htmlFor="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value={4} />
            <label htmlFor="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value={3} />
            <label htmlFor="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value={2} />
            <label htmlFor="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value={1} />
            <label htmlFor="star1" title="text">1 star</label>
          </select>
          <input type="submit" value="Submit" />
          </div>
          </form>
        </div>
      );
    }
  }

  export default Star;
