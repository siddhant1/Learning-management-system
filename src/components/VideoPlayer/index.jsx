import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './index.css'
import { ThumbsUp, ThumbsDown } from 'react-feather'
import FeedbackSection from '../feedback-section/FeedbackSection'
import Videos from '../videos/Videos'
class App extends Component {
   state = {
      url: 'https://www.youtube.com/watch?v=zpXnmy-6w1g'
   }

   componentDidCatch() {
      // backend call
      // get video id from props and make an API call to get the url (this.props.id)
   }

   render() {
      return (
         <div className='play-container'>
            <div className='w-75'>
               <div className='video-container'>
                  <ReactPlayer
                     width={'853px'}
                     height={'480px'}
                     url={this.state.url}
                     controls
                  />
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '135.26%'
                     }}>
                     <div className='video-title'>Panipat ki ladai</div>
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
               <div className="list-header">Up Next</div>
               <Videos isNewFalse={true} />
            </div>
         </div>
      )
   }
}

export default App
