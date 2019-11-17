import React from 'react'
import { Player, ControlBar } from 'video-react'
import './VideoEditor.css'
export default class VideoPlayer extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         url: '',
         player: null
      }
   }
   componentDidMount() {
      // subscribe state change
      this.player.subscribeToStateChange(this.handlePlayerChange.bind(this))
   }

   handleChooseFileChange = e => {
      var selectedLocalVID = e.target.files[0]
      this.props.sendVideoToParent(selectedLocalVID)
      console.log(selectedLocalVID)
      var { player } = this.player.getState()
      console.log('duration', player.duration)
      this.setState({
         url: URL.createObjectURL(new Blob([selectedLocalVID]))
      })
   }

   handlePlayerChange = (state, prevState) => {
      state.duration !== prevState.duration &&
         this.setState({ player: state }, () =>
            this.props.sendDurationToParent(this.state.player.duration)
         )
   }
   render() {
      return (
         <div>
            <input
               type='file'
               name='file'
               id='input-file'
               onChange={this.handleChooseFileChange}
            />
            <Player
               fluid={false}
               className='video-player'
               src={this.state.url}
               ref={player => {
                  this.player = player
               }}>
               <ControlBar
                  autoHide={true}
                  className='my-class'
                  disableCompletely={true}
               />
            </Player>
         </div>
      )
   }
}
