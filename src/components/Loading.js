import React, { Component } from 'react'
import loading from "./loading-gi.gif"
export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" style={{height:'50px'}}/>
      </div>
    )
  }
}

