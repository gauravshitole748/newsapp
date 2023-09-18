import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, author, publishedAt, source } =
      this.props;
    const defaultImage =
      "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252Fdfd23125-b822-44b3-bf42-95cef6f3098e.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900";

    return (
      <div
        className="card my-3 shadow bg-body-tertiary rounded"
        style={{ width: "18rem" }}
        data-bs-theme={this.props.theme}>
        <img
          src={imageUrl ? imageUrl : defaultImage}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <span>Source: {source}</span>
          <h5 className="card-title">
            {title ? title.slice(0, 50) + "..." : ""}
          </h5>
          <p className="card-text">
            {description ? description.slice(0, 89) + "..." : ""}
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              - by {author ? author : ""} on{" "}
              {new Date(publishedAt).toLocaleDateString()},
              {new Date(publishedAt).toLocaleTimeString()}
            </small>
          </p>
          <a
            href={url}
            target="_blank"
            className={
              this.props.theme === "light"
                ? "btn btn-primary btn-sm"
                : "btn btn-secondary btn-sm"
            }>
            Read more..
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
