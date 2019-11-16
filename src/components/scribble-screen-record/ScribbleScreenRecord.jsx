import React from 'react'
import RecordRTC from 'recordrtc'
import './ScribbleScreenRecord.css'
import uploadFile from '../../utils/generic/genericMethod'
import API_END_POINTS from '../../utils/constants/apiEndPoint'

var recorder
class ScribbleScreenRecord extends React.Component {
   state = {
      stopRecording: false,
      startRecording: false
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
      const blob = recorder.getBlob()
      console.log('blob')
      const data = new FormData()
      data.append('file', blob)
      data.append('upload_preset', 'Sick-fits')
      const res = await fetch(
         'https://api.cloudinary.com/v1_1/dv95rctxg/video/upload',
         {
            method: 'POST',
            body: data
         }
      ).then(d => d.json())
      console.log('res', res)

      const lecture = await fetch(API_END_POINTS.addLecture, {
         method: 'POST',
         headers: {
            'x-auth-token': localStorage.authToken,
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            name: 'Lecture 1',
            lectureUrl: res.url,
            thumbnailImageUrl:
               'https://static.toiimg.com/photo/msid-67868104/67868104.jpg?1368689'
         })
      }).then(d => d.json())

      // addLec - > add props for course Id later
      const c = await fetch(
         `${API_END_POINTS.createPlayList}/5dd02c901b6252030e45bdd4/addLec`,
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

      recorder && recorder.screen.stop()
      recorder && recorder.destroy()
      recorder = null
   }
   startRecording = () => {
      !this.state.startRecording &&
         this.captureScreen(screen => {
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
         <div className='webcam-wrapper'>
            <button
               className='webcam-button btn btn-success'
               id='btn-start-recording'
               onClick={this.startRecording}>
               Start Recording
            </button>
            <button
               className='webcam-button btn btn-danger'
               id='btn-stop-recording'
               onClick={this.stopRecording}>
               Stop Recording
            </button>
         </div>
      )
   }
}
export default ScribbleScreenRecord
