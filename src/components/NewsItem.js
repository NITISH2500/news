import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let{title,description,imageUrl,iurl,col,author,date,source,color}=this.props;
    return (
      <div className="my-3" style={{color:col==='white'}}>
        <div className="card">
  <img src={!imageUrl?"https://www.freeiconspng.com/thumbs/news-icon/news-icon-18.png":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
     
    <h5 className="card-title">{title}...   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ zIndex:'1',backgroundColor:`${color}`,translate:'-50%' }}>{source}</span></h5>

    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted"> By {!author?"Unkown":author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={iurl} className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
