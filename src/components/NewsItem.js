import React from 'react'

const NewsItem = (props) => {

    let { title, description, urlToImage, url, publishedAt } = props;

    return (

        <div className="card mx-auto my-3" style={{ width: "80%" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={urlToImage} className="img-fluid rounded-start" alt={title} style={{ width: '100%', height: '100%' }} />
                </div>
                <div className="col-md-8">

                    <div className="card-body">

                        <a href={url} target="_blank" rel="noreferrer" style={{ color: 'black', textDecoration: 'none' }}><h4 className="card-title">{title}</h4></a>
                        <p className="card-text">{description}</p>

                    </div>

                    <div className="card-footer">
                        <h6>Published At <span className="badge bg-secondary">{new Date(publishedAt).toUTCString()}</span></h6>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default NewsItem