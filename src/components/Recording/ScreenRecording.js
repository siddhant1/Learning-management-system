import React from 'react'
import RecordRTC from 'recordrtc'
import './Recording.css'
import uploadFile from '../../utils/generic/genericMethod'
import API_END_POINTS from '../../utils/constants/apiEndPoint'
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/BounceLoader'
import swal from 'sweetalert'

var recorder
class ScreenRecording extends React.Component {
   state = {
      stopRecording: false,
      startRecording: false,
      thumbnailImageUrl: '',
      name: '',
      submit: false
   }
   componentDidMount() {
      if (
         !navigator.getDisplayMedia &&
         !navigator.mediaDevices.getDisplayMedia
      ) {
         var error = 'Your browser does NOT support the getDisplayMedia API.'
         this.setState({
            errorMessage: error
         })
      }
   }
   invokeGetDisplayMedia = (success, error) => {
      var displaymediastreamconstraints = {
         video: {
            displaySurface: 'monitor', // monitor, window, application, browser
            logicalSurface: true,
            cursor: 'always' // never, always, motion
         }
      }
      // above constraints are NOT supported YET
      // that's why overridnig them
      displaymediastreamconstraints = {
         video: true
      }
      if (navigator.mediaDevices.getDisplayMedia) {
         navigator.mediaDevices
            .getDisplayMedia(displaymediastreamconstraints)
            .then(success)
            .catch(error)
      } else {
         navigator
            .getDisplayMedia(displaymediastreamconstraints)
            .then(success)
            .catch(error)
      }
   }
   addStreamStopListener = (stream, callback) => {
      stream.addEventListener(
         'ended',
         function() {
            callback()
            callback = function() {}
         },
         false
      )
      stream.addEventListener(
         'inactive',
         function() {
            callback()
            callback = function() {}
         },
         false
      )
      stream.getTracks().forEach(function(track) {
         track.addEventListener(
            'ended',
            function() {
               callback()
               callback = function() {}
            },
            false
         )
         track.addEventListener(
            'inactive',
            function() {
               callback()
               callback = function() {}
            },
            false
         )
      })
   }
   captureScreen = callback => {
      this.invokeGetDisplayMedia(
         screen => {
            this.addStreamStopListener(screen, () => {
               // this.stopRecordingCallback();
            })
            callback(screen)
         },
         function(error) {
            console.error(error)
            alert(
               'Unable to capture your screen. Please check console logs.\n' +
                  error
            )
         }
      )
   }
   stopRecordingCallback = async () => {
      this.video.src = this.video.srcObject = null
      this.video.muted = false
      this.video.volume = 1
      const blob = recorder.getBlob()
      this.video.src = URL.createObjectURL(recorder.getBlob())
      const data = new FormData()
      data.append('file', blob)
      data.append('upload_preset', 'Sick-fits')

      this.setState({ submit: true })

      try {
         const res = await fetch(
            'https://api.cloudinary.com/v1_1/dv95rctxg/video/upload',
            {
               method: 'POST',
               body: data
            }
         ).then(d => d.json())

         const lecture = await fetch(API_END_POINTS.addLecture, {
            method: 'POST',
            headers: {
               'x-auth-token': localStorage.authToken,
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               name: this.state.name,
               lectureUrl: res.url,
               thumbnailImageUrl: this.state.thumbnailImageUrl
            }).then(d => d.json())
         })

         let id = this.props.location.pathname.split('/')
         const c = await fetch(
            `${API_END_POINTS.createPlayList}/${id[2]}/addLec`,
            {
               method: 'POST',
               headers: {
                  'x-auth-token': localStorage.authToken,
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                  lecture: lecture._id
               })
            }
         ).then(res => res.json())
         console.log(c)
         this.setState({
            submit: false
         })
         swal('Good job!', 'Video Saved!', 'success')
         recorder && recorder.screen.stop()
         recorder && recorder.destroy()
         recorder = null
      } catch (error) {
         this.setState({
            submit: false
         })
         swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please Try Again'
         })
      }
   }
   startRecording = () => {
      !this.state.startRecording &&
         this.captureScreen(screen => {
            this.video.srcObject = screen
            recorder = RecordRTC(screen, {
               type: 'video'
            })
            recorder.startRecording()
            // release screen on stopRecording
            recorder.screen = screen
            this.setState({
               startRecording: true,
               stopRecording: false
            })
         })
   }
   stopRecording = () => {
      recorder.stopRecording(this.stopRecordingCallback)
      this.setState({
         startRecording: false,
         stopRecording: true
      })
   }
   render() {
      return (
         <LoadingOverlay
            active={this.state.submit}
            spinner={<BounceLoader />}
            styles={{
               overlay: base => ({
                  ...base,
                  background: 'rgba(237, 247, 248, 0.3)'
               })
            }}>
            <div className='webcam-background'>
               <div style={{ marginLeft: '43vw' }}>
                  <div
                     style={{
                        position: 'absolute',
                        top: '3',
                        marginBottom: '3px'
                        // left:'40vw'
                     }}>
                     <input
                        onChange={e => {
                           this.setState({
                              name: e.target.value
                           })
                        }}
                        style={{ display: 'block', marginBottom: '4px' }}
                        type='text'
                        placeholder='Enter Lecture Name'
                     />
                     <input
                        onChange={e => {
                           this.setState({ thumbnailImageUrl: e.target.value })
                        }}
                        type='text'
                        placeholder='Enter Thumbnail Image URL'
                     />
                  </div>
               </div>
               <video
                  className='webcam-record'
                  ref={element => (this.video = element)}
                  controls
                  autoPlay
                  playsInline></video>
               <button
                  className='webcam-button'
                  id='btn-start-recording'
                  onClick={this.startRecording}>
                  Start Recording
               </button>
               <button
                  className='webcam-button'
                  id='btn-stop-recording'
                  onClick={this.stopRecording}>
                  Stop Recording
               </button>

               {/* <hr /> */}
            </div>
         </LoadingOverlay>
      )
   }
}
export default ScreenRecording
