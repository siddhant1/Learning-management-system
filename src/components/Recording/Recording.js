import React from 'react'
import RecordRTC from 'recordrtc'
import './Recording.css'
import uploadFile from '../../utils/generic/genericMethod'
import API_END_POINTS from '../../utils/constants/apiEndPoint'
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/BounceLoader'
import swal from 'sweetalert'
import { matchPath } from 'react-router-dom'

var recorder

class Recording extends React.Component {
   state = { thumbnailImageUrl: '', name: '', submit: false }

   captureCamera = callback => {
      navigator.mediaDevices
         .getUserMedia({ audio: true, video: true })
         .then(function(camera) {
            callback(camera)
         })
         .catch(function(error) {
            alert('Unable to capture your camera. Please check console logs.')
            console.error(error)
         })
   }
   stopRecordingCallback = async () => {
      const match = matchPath(this.props.history.location.pathname, {
         path: '/webcam/:id',
         exact: false,
         strict: false
      })

      this.video.src = this.video.srcObject = null
      this.video.muted = false
      this.video.volume = 1
      const blob = recorder.getBlob()
      this.video.src = URL.createObjectURL(recorder.getBlob())
      const data = new FormData()
      data.append('file', blob)
      data.append('upload_preset', 'Sick-fits')
      this.setState({
         submit: true
      })
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
            })
         }).then(d => d.json())

         const c = await fetch(
            `${API_END_POINTS.createPlayList}/${match.params.id}/addLec`,
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
         ).then(d => d.json())

         this.setState({
            submit: false
         })
         swal('Good job!', 'Video Saved!', 'success')
         recorder && recorder.camera.stop()
         recorder && recorder.destroy()
         recorder = null
      } catch (error) {
         console.log(error)
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
      this.captureCamera(camera => {
         this.video.muted = true
         this.video.volume = 0
         this.video.srcObject = camera
         recorder = RecordRTC(camera, {
            type: 'video'
         })
         recorder.startRecording()
         // release camera on stopRecording
         recorder.camera = camera
      })
   }
   stopRecording = () => {
      recorder.stopRecording(this.stopRecordingCallback)
   }
   render() {
      // console.log(this.props.match.params.id)
      // console.log(this.props.location.pathname.split('/'))
      // let id = this.props.location.pathname.split('/')
      // console.log(id)
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
export default Recording
