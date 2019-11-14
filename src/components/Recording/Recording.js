import React from 'react'
import RecordRTC from 'recordrtc'

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
         <>
            <title>Screen Recording | RecordRTC</title>
            <h1>Screen Recording using RecordRTC</h1>

            <br />

            <button id='btn-start-recording' onClick={this.startRecording}>
               Start Recording
            </button>
            <button id='btn-stop-recording' onClick={this.stopRecording}>
               Stop Recording
            </button>

            <hr />
            <video
               ref={element => (this.video = element)}
               controls
               autoPlay
               playsInline></video>
         </>
      )
   }
}
export default Recording
