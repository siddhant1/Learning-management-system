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
   display: flex;
   animation: 3s ${bounceAnimation};
`

export default class Home extends Component {
   state = {
      showOptions: false,
      images: [
         { name: 'Artboard – 1.png', route: '/webCam' },
         { name: 'Artboard – 2.png', route: '/pen' },
         { name: 'Artboard – 3.png', route: '/screenRecord' },
         { name: 'Artboard – 4.png', route: '/text' },
         { name: 'Artboard – 5.png', route: '/uploadImage' }
      ]
   }
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
                           <div style={{ display: 'flex', marginTop: '20px' }}>
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
                                                      img.route
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
