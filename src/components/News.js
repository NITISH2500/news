 import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
export class News extends Component {
          
// The provided code is not setting the background color correctly because it's trying to set the background color directly within the setState() callback. This is not allowed because setState() is an asynchronous operation and the state update won't be reflected immediately.
    constructor(){
        super();
        this.state={
            articles: [],
            page:1,
            loading:false,
        }
        console.log(this.state.page.size);
    }
    async componentDidMount(){
      
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=0fa41e4a98ac41948405e19167041071&pageSize=${this.props.pageSize}`;
      let data= await fetch(url);
      let parsedData= await data.json();
      this.setState({ articles:parsedData.articles, totalArticles:parsedData.totalResults})
     
    }
     previous=async()=>{
      console.log("prev");
    
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=0fa41e4a98ac41948405e19167041071&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({
        loading:true,
      })
      let data= await fetch(url);
      let parsedData= await data.json();
      
      this.setState({
        page:this.state.page-1,
        articles: parsedData.articles,
        loading:false,
    })
    }
    next=async()=>{
     
      if(this.state.page+1>Math.ceil(this.state.totalArticles/this.props.pageSize)){

      }
      else{
      console.log(this.state.page) ;
      console.log('next');
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=0fa41e4a98ac41948405e19167041071&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({
        loading:true,
      })
      this.state.loading&&this.state({
        articles:[],
      })
      let data= await fetch(url);
      let parsedData= await data.json();
      this.setState({
        page:this.state.page + 1,
        articles: parsedData.articles,
        loading:false,
        
        
    });
  }
    };
  render() {
    return (
        <div className='container my-3' >
            <h1 className="text-center" style={{margin:'40px'}}>NewsByPeople-Top Headlines</h1>
            {this.state.loading&&<Loading/>}
            <div className="row">
            
                {!this.state.loading&&this.state.articles.map((article)=>{
              return <div className="col-md-4" key={article.url}>
               <NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage} iurl={article.url} author={article.author} date={article.publishedAt} source={article.source.name} color={this.props.color}/>
             </div>
                })}

        </div>
        <div className='d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.previous}>&larr; Prev</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalArticles/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.next}>Next&rarr;</button>
        </div>
        </div>
      
    )
  }
}

export default News
