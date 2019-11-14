import React, { Component } from 'react'
import LandingPageCarousel from './LandingPageCarousel'
import VideoItem from './VideoItem'

class LandingPage extends Component {
   render() {
      let videoObj = {
         name: 'best video',
         lectureUrl: '/play/1',
         thumbnailImageUrl:
            'https://cdn.pixabay.com/photo/2013/07/12/17/47/test-pattern-152459__340.png',
         isPublished: false,
         dateCreated: Date.now(),
         feedback: 'lol'
      }
      return (
         <>
            <LandingPageCarousel />
            <VideoItem videoObj={videoObj} history={this.props.history} />
         </>
      )
   }
}

export default LandingPage
