import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url } = this.props;

    return (
      <div
        className="card my-3 shadow bg-body-tertiary rounded"
        style={{ width: "18rem" }}
        data-bs-theme="dark">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} target="_blank" className="btn btn-primary btn-sm">
            Read more..
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
