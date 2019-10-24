import React from 'react'
import { Container } from 'react-floating-action-button'
import { IoIosAdd } from 'react-icons/io'
import './CreatePlaylist.css'

export default class CreatePlaylistActionButton extends React.Component {
   render() {
      return (
         <Container>
            <IoIosAdd
               className='floating-action-button'
               onClick={() => this.props.callback && this.props.callback()}
            />
         </Container>
      )
   }
}
