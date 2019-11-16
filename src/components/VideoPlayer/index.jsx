import React, { Component } from 'react'
import { ThumbsDown, ThumbsUp } from 'react-feather'
import ReactPlayer from 'react-player'
import FeedbackSection from '../feedback-section/FeedbackSection'
import './index.css'
import Videos from '../videos/Videos'
import API_END_POINTS from '../../utils/constants/apiEndPoint'
import Loader from 'react-spinners/BounceLoader'
class VideoPlayer extends Component {
   state = {
      url: '',
      loading: false
   }

   async componentDidMount() {
      this.setState({ loading: true })
      const lecture = await fetch(
         `${API_END_POINTS.addLecture}/${this.props.match.params.id}`,
         {
            headers: {
               'Content-Type': 'application/json',
               'x-auth-token': localStorage.authToken
            }
         }
      ).then(d => d.json())

      console.log(lecture)
      this.setState({ lecture: lecture[0], loading: false })
   }

   render() {
      if (this.state.loading) {
         return <Loader />
      }
      return (
         <div className='play-container'>
            <div className='w-75'>
               <div className='video-container'>
                  <ReactPlayer
                     width={'853px'}
                     height={'480px'}
                     url={this.state.lecture && this.state.lecture.lectureUrl}
                     controls
                  />
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '135.26%'
                     }}>
                     <div className='video-title'>
                        {this.state.lecture && this.state.lecture.name}
                     </div>
                     <div className='like-panel'>
                        <div>
                           <ThumbsUp />
                        </div>
                        <div>
                           <ThumbsDown />
                        </div>
                     </div>
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        1000 views
                     </div>
                  </div>
                  <div
                     style={{
                        height: '1px',
                        background: '#000',
                        width: '136.06%'
                     }}
                  />
                  <FeedbackSection />
               </div>
            </div>
            <div className='w-25 play-video-list'>
               <div className='list-header'>Up Next</div>
               <Videos isNewFalse={true} />
            </div>
         </div>
      )
   }
}

export default VideoPlayer
