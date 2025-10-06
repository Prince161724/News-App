import React from 'react'
const Newsitem = (props) => {
  let { title, description, imageurl, newsurl, Author, source } = props;
  let date = new Date(props.updateTime);
  let kmt = date.toGMTString();
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={!imageurl ? "https://i12.haber7.net//haber/haber7/og_image/2025/23/tesla_model_y_turkiyede_almanyadan_daha_ucuza_satiliyor_1748844439_3565.jpg" : imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {source}
            <span className="visually-hidden"></span>
          </span></h5>
          <p className="card-text">{description} </p>
          <p className="card-text"><small>Published By {Author ? Author : "Prince"} on {kmt}</small></p>
          <a href={newsurl} target="_blank" className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )
}
export default Newsitem;
