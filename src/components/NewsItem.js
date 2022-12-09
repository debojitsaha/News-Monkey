import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, desc, imageUrl, newsUrl, author, date, source, dark } = this.props;
    
    return (
      <div className="card my-3">
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://www.lexiconn.in/wp-content/themes/ryse/assets/images/no-image/No-Image-Found-400x264.png"
          }
          className="card-img-top"
          alt="..."
        />        
        <div className={dark?"card-body bg-light text-dark":"card-body bg-dark text-white"} id="cardBody">
          <span className="d-flex position-absolute top-0 end-0 badge rounded-pill bg-danger"> {source} </span>
          <h5 className="card-title">
            {title
              ? title.length > 45
                ? title.slice(0, 65) + "..."
                : title
              : ""}
          </h5>
          <p className="card-text">
            {desc ? (desc.length > 45 ? desc.slice(0, 88) + "..." : desc) : ""}
          </p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
