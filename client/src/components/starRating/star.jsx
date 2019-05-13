
import "./kittystar.css"

var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Document</title>
          <meta charSet="UTF-8" />
          <link rel="stylesheet" type="text/css" href="style.css" />
          <title>Star rating</title>
          <div className="rate">
            <input type="radio" id="star5" name="rate" defaultValue={5} />
            <label htmlFor="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" defaultValue={4} />
            <label htmlFor="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" defaultValue={3} />
            <label htmlFor="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" defaultValue={2} />
            <label htmlFor="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" defaultValue={1} />
            <label htmlFor="star1" title="text">1 star</label>
          </div>
        </div>
      );
    }
  });