import React, { Component } from 'react'
import Videos from '../videos/Videos'
import './home.css'

export default class Home extends Component {
   render() {
      return (
         <div className='home-page-content'>
            <div className="home-page-content-text">Recently Created Videos</div>
            <Videos />
         </div>
      )
   }
}
