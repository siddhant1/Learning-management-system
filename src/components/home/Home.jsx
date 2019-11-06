import React, { Component } from 'react'
import Videos from '../videos/Videos'
import './home.css'
import CreatePlaylistActionButton from '../create-playlist/CreatePlaylistActionButton'

export default class Home extends Component {
   render() {
      return (
         <div className='home-page-content'>
            <div className='home-page-content-text'>
               Recently Created Videos
            </div>
            <Videos />
            <CreatePlaylistActionButton
               callback={() => this.props.history.push('/newPlaylist')}
            />
         </div>
      )
   }
}
