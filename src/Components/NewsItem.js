import React, { Component } from "react";

class NewsItem extends Component {
  constructor() {
    super();
  }
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="conatiner my-3">
        <div
          className="card"
          style={{ width: "18rem", border: "5px solid black" }}
        >
          <img src={imageUrl} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-header" style={{ background: "pink" }}>
              {title}
            </h5>
            <p className="card-text" style={{ color: "red" }}>
              {description}...
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More..
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
