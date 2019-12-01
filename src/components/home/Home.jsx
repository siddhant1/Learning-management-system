import React, { Component } from 'react'
import { fadeIn } from 'react-animations'
import { ArrowRight } from 'react-feather'
import { PortalWithState } from 'react-portal'
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap'
import styled, { keyframes } from 'styled-components'
import CreatePlaylistActionButton from '../create-playlist/CreatePlaylistActionButton'
import Videos from '../videos/Videos'
import './home.css'
import Axios from 'axios'
import API_END_POINTS from '../../utils/constants/apiEndPoint'
import { CircularProgress } from '@material-ui/core'

const bounceAnimation = keyframes`${fadeIn}`

const FadeInDiv = styled.div`
   display: flex;
   animation: 3s ${bounceAnimation};
`

export default class Home extends Component {
   state = {
      showOptions: false,
      loading: false,
      images: [
         { name: 'Artboard – 1.png', route: '/webCam' },
         { name: 'Artboard – 2.png', route: '/pen' },
         { name: 'Artboard – 3.png', route: '/screenRecord' },
         { name: 'Artboard – 4.png', route: '/text' },
         { name: 'Artboard – 5.png', route: '/uploadImage' }
      ],
      courseId: ''
   }
   createPlayList = async event => {
      event.preventDefault()
      this.setState({
         loading: true
      })
      const { playList: name } = this.state
      let requestBody = {
         name
      }
      let requestHeader = {
         headers: { 'x-auth-token': localStorage.getItem('authToken') }
      }
      try {
         let playList = await Axios.post(
            API_END_POINTS.createPlayList,
            requestBody,
            requestHeader
         )
         if (playList.data) {
            this.setState({ showOptions: true, loading: false })
         }
         this.setState({
            courseId: playList.data._id
         })
      } catch (error) {
         alert('error ' + error)
         this.setState({
            loading: false
         })
      }
   }
   handleChange = event => {
      event.preventDefault()
      this.setState({
         [event.target.name]: event.target.value
      })
   }
   render() {
      const { loading } = this.state
      return (
         <div className='home-page-content'>
            <div className='home-page-content-text'>
               Recently Created Videos
            </div>
            <Videos isNewFalse={localStorage.role === 'student'} />
     
            <div className='course-div home-page-content-text'>
               Courses Created By You
               <button
                  className='btn btn-primary'
                  onClick={() => this.props.history.push('/newPlaylist')}>
                  PlayList
               </button>
            </div>
            <PortalWithState closeOnEsc>
               {({ openPortal, closePortal, isOpen, portal }) => (
                  <React.Fragment>
                     <CreatePlaylistActionButton
                        callback={isOpen ? closePortal : openPortal}
                     />
                     {portal(
                        <div className='portal'>
                           <div style={{ display: 'flex', marginTop: '20px' }}>
                              <p style={{ marginTop: '7px' }}>
                                 Enter Playlist Name:
                              </p>

                              <InputGroup>
                                 <Input
                                    name='playList'
                                    onChange={this.handleChange}
                                 />
                                 <InputGroupAddon addonType='append'>
                                    <Button onClick={this.createPlayList}>
                                       <ArrowRight />
                                    </Button>
                                 </InputGroupAddon>
                              </InputGroup>
                           </div>
                           <br />
                           {loading && <CircularProgress />}
                           {this.state.showOptions && (
                              <div style={{ display: 'block' }}>
                                 <div>
                                    {this.state.images.map(img => (
                                       <div
                                          className='method'
                                          style={{
                                             display: 'inline-block',
                                             marginTop: 0
                                          }}>
                                          <FadeInDiv>
                                             <img
                                                className='pl-img'
                                                key={img.name}
                                                src={`./images/${img.name}`}
                                                alt={img.name}
                                                onClick={() =>
                                                   this.props.history.push(
                                                      `${img.route}/${this.state.courseId}`
                                                   )
                                                }
                                             />
                                          </FadeInDiv>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           )}
                        </div>
                     )}
                  </React.Fragment>
               )}
            </PortalWithState>
         </div>
      )
   }
}
