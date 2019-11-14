import React, { Component } from 'react'
import LandingPageCarousel from './LandingPageCarousel'
import VideoItem from './VideoItem'
import Grid from '@material-ui/core/Grid'

class LandingPage extends Component {
   constructor(props) {
      super(props)
      this.state = {
         videoArray: []
      }
   }

   componentDidMount = () => {
      let videoArray = [
         {
            name: 'best video 1',
            lectureUrl: '/play/1',
            thumbnailImageUrl:
               'https://cdn.pixabay.com/photo/2013/07/12/17/47/test-pattern-152459__340.png',
            isPublished: false,
            dateCreated: Date.now(),
            feedback: 'lol'
         },
         {
            name: 'best video 2',
            lectureUrl: '/play/1',
            thumbnailImageUrl:
               'https://cdn.pixabay.com/photo/2013/07/12/17/47/test-pattern-152459__340.png',
            isPublished: false,
            dateCreated: new Date('10/2/2019'),
            feedback: 'lol'
         },
         {
            name: 'best video 3',
            lectureUrl: '/play/1',
            thumbnailImageUrl:
               'https://cdn.pixabay.com/photo/2013/07/12/17/47/test-pattern-152459__340.png',
            isPublished: false,
            dateCreated: new Date('10/2/2015'),
            feedback: 'lol'
         }
      ]
      this.setState({ videoArray })
   }

   render() {
      return (
         <>
            <LandingPageCarousel />
            <Grid container spacing={40} alignItems='center' justify='center'>
               {this.state.videoArray.map(videoObj => {
                  return (
                     <Grid item>
                        <VideoItem
                           videoObj={videoObj}
                           history={this.props.history}
                        />
                     </Grid>
                  )
               })}
            </Grid>
         </>
      )
   }
}

export default LandingPage
