import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import{
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"



export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:'white',
    
    }
    
  }
  toogleClick= () => {
    if (this.state.data === 'white') {
      this.setState({ data: 'dark' });
      
    }
    else{
     this.setState({data:'white'});
     

    }
    console.log(this.state.data);
   }
  render() {
   
    const {data}=this.state;

    return (
      <div>
        <BrowserRouter>
        <Navbar data={data} toogle={this.toogleClick}/>
        <Routes>
                 <Route exact path="/"  element={<News key="general" country="in" categories="general"  pageSize={5} color="green"/>}/>
                 <Route exact path="/business" element={<News key="business" country="in" categories="business"  pageSize={5} color="blue"/>}/>
                 <Route exact path="/entertainment"element={<News key="entertainment" country="in" categories="entertainment" pageSize={5} color="orange"/>}/>
                 <Route exact path="/health" element={<News key="health" country="in" categories="health"  pageSize={5} color="red"/>}/>
                 <Route exact path="/science" element={<News key="science" country="in" categories="science"  pageSize={5} color="purple"/>}/>
                 <Route exact path="/sports"element={<News key="sports" country="in" categories="sports"  pageSize={5} color="yellow"/>}/>
                 <Route exact path="/technology" element={<News key="technology" country="in" categories="technology" pageSize={5} color="gray"/>}/>
                 </Routes>
                 
         </BrowserRouter>
         
       
      </div>
    )
  }
}

