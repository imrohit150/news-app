import React from 'react'
import noImg from './images/noimg.jpg'



const NewsItem = (props) => {

    let { toggleColor, title, description, imageUrl, newsUrl, author, publish, source } = props;
    return (
        <div className="my-3">
            <div className={`card ${toggleColor === "Dark" ? "" : "bg-dark"}  ${toggleColor === "Dark" ? "" : "border border-light"}`}>
                <div className=' d-flex justify-content-end'>
                    <span className="position-absolute badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <img src={imageUrl ? imageUrl : noImg} className=" editimg card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className={`card-title ${toggleColor === "Dark" ? "" : "text-light"}`}>{title}...</h5>
                    <p className={`card-text ${toggleColor === "Dark" ? "" : "text-light"}`}>{description}...</p>
                    <p className={`card-text ${toggleColor === "Dark" ? "" : "text-light"}`}><small className="text-danger">By {author ? author : "Unknown"} on {new Date(publish).toGMTString()}  </small></p>
                    <a href={newsUrl} className={`btn btn-sm ${toggleColor === "Dark" ? "btn-dark" : "btn-light"}`}>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
