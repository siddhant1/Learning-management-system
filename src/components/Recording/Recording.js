import React from 'react'
import RecordRTC from 'recordrtc'
import './Recording.css'

var recorder
class Recording extends React.Component {
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
   stopRecordingCallback = () => {
      this.video.src = this.video.srcObject = null
      this.video.muted = false
      this.video.volume = 1
      this.video.src = URL.createObjectURL(recorder.getBlob())

      recorder.camera.stop()
      recorder.destroy()
      recorder = null
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
      return (
         <div className='webcam-background'>
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
      )
   }
}
export default Recording
