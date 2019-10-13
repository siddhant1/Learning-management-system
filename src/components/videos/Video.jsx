import React, { Component } from 'react'
import './video.css'

export default class Video extends Component {
   render() {
      const { video } = this.props
      return (
         <div className='video-container'>
            <img
               className='video-thumbnail'
               src={video && video.thumbnailImage}
               alt={video && video.thumbnailImage}
               {...this.props}
            />
            <div className='lecture-title'>{video && video.title}</div>
         </div>
      )
   }
}
