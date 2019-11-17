import React from 'react'
import './VideoEditor.css'
import VideoPlayer from './VideoPlayer'
import Slider from './Slider'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
   Card,
   CardImg,
   CardText,
   CardBody,
   CardTitle,
   CardSubtitle,
   Button,
   Badge,
   Spinner
} from 'reactstrap'

class VideoEditor extends React.Component {
   constructor() {
      super()
      this.state = {
         duration: 0,
         file: null,
         start: null,
         end: null,
         showSpinner: false
      }
   }
   sendDurationToParent = duration => {
      !isNaN(duration) &&
         this.setState(
            {
               duration
            },
            () => console.log('duration recieved', this.state.duration)
         )
   }
   sendTimeToParent = time => {
      this.setState({
         start: time.min,
         end: time.max,
         setControls: false
      })
   }
   sendVideoToParent = file => {
      this.setState({
         file,
         setControls: true
      })
   }
   cropVideo = () => {
      this.setState({ showSpinner: true })
      console.log('called')
      const data = new FormData()
      data.append('file', this.state.file)
      data.append('start', this.state.start)
      data.append('end', this.state.end)
      axios
         .post('http://localhost:1234/crop', data)
         .then(res => {
            this.setState({ showSpinner: false })
            if (res.data.status === 200) {
               toast.success('🦄 video cropped successfully !', {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true
               })
            } else {
               toast.error('Could not crop the video , some error occured!', {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true
               })
            }
         })
         .catch(e => {
            this.setState({ showSpinner: false })
            toast.error('Please select a video to crop!', {
               position: 'top-right',
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true
            })
         })
   }
   render() {
      return (
         <div className='App position-center app-background'>
            <Card className='video-card'>
               <CardBody>
                  <CardTitle>
                     <h1>
                        <Badge color='secondary'>
                           Select a video to crop !
                        </Badge>
                     </h1>
                  </CardTitle>
                  <VideoPlayer
                     controls={false}
                     sendDurationToParent={this.sendDurationToParent}
                     sendVideoToParent={this.sendVideoToParent}
                     className='video-player'
                  />
                  <Slider
                     max={this.state.duration}
                     sendTimeToParent={this.sendTimeToParent}
                  />
                  <Button
                     color='success'
                     className='mt-4 crop'
                     onClick={this.cropVideo}>
                     Crop Video
                  </Button>
                  {this.state.showSpinner && (
                     <div>
                        <Spinner color='primary' className='mt-4' />
                     </div>
                  )}
               </CardBody>
            </Card>
            <ToastContainer
               position='top-right'
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnVisibilityChange
               draggable
               pauseOnHover
            />
         </div>
      )
   }
}

export default VideoEditor
