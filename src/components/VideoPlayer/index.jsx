import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './index.css'
import { ThumbsUp, ThumbsDown } from 'react-feather'

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
                  width: '64.26%'
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
                  width: '65.06%'
               }}></div>
         </div>
      )
   }
}

export default App
