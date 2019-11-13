import React, { Component } from 'react'
import { fadeIn } from 'react-animations'
import { ArrowRight } from 'react-feather'
import { PortalWithState } from 'react-portal'
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap'
import styled, { keyframes } from 'styled-components'
import CreatePlaylistActionButton from '../create-playlist/CreatePlaylistActionButton'
import Videos from '../videos/Videos'
import './home.css'

const bounceAnimation = keyframes`${fadeIn}`

const FadeInDiv = styled.div`
   display: inline-block;
   animation: 3s ${bounceAnimation};
`

export default class Home extends Component {
   state = { showOptions: false }
   render() {
      return (
         <div className='home-page-content'>
            <div className='home-page-content-text'>
               Recently Created Videos
            </div>
            <Videos />
            <PortalWithState closeOnEsc>
               {({ openPortal, closePortal, isOpen, portal }) => (
                  <React.Fragment>
                     <CreatePlaylistActionButton
                        callback={isOpen ? closePortal : openPortal}
                     />
                     {portal(
                        <div className='portal'>
                           <div style={{ display: 'flex' }}>
                              <p style={{ marginTop: '7px' }}>
                                 Enter Playlist Name:
                              </p>

                              <InputGroup>
                                 <Input />
                                 <InputGroupAddon addonType='append'>
                                    <Button
                                       onClick={() =>
                                          this.setState({ showOptions: true })
                                       }>
                                       <ArrowRight />
                                    </Button>
                                 </InputGroupAddon>
                              </InputGroup>
                           </div>
                           <br />
                           {this.state.showOptions && (
                              <div style={{ display: 'block' }}>
                                 <div>
                                    <FadeInDiv>
                                       <img
                                          className='pl-img'
                                          src='./images/Artboard – 1.png'
                                       />
                                    </FadeInDiv>
                                    <FadeInDiv>
                                       <img
                                          className='pl-img'
                                          src='./images/Artboard – 2.png'
                                       />
                                    </FadeInDiv>
                                    <FadeInDiv>
                                       <img
                                          className='pl-img'
                                          src='./images/Artboard – 3.png'
                                       />
                                    </FadeInDiv>
                                    <FadeInDiv>
                                       <img
                                          className='pl-img'
                                          src='./images/Artboard – 4.png'
                                       />
                                    </FadeInDiv>
                                    <FadeInDiv>
                                       <img
                                          className='pl-img'
                                          src='./images/Artboard – 5.png'
                                       />
                                    </FadeInDiv>
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
