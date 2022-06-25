import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageurl, newsurl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card my-3" style={{ width: "18rem" }}>
                    <img src={imageurl ? imageurl : imageurl = "https://images.mktw.net/im-519287/social"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {source}
                    <span className="visually-hidden" style={{left:'90%' , zindex:'1'}}>{source}</span>
                </span>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsurl} target="_blank" className="btn btn-sm btn-dark" >Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
