import React from 'react'

class WebCam extends React.Component {
   start = (stream, lengthInMS) => {
      this.recorder = new MediaRecorder(stream, {
         mimeType: 'video/webm; codecs=vp9'
      })
      // this.recorder.setAudioSource(MediaRecorder.MIC)
      let data = []

      this.recorder.ondataavailable = event => data.push(event.data)
      this.recorder.start()

      let stopped = new Promise((resolve, reject) => {
         this.recorder.onstop = resolve
         this.recorder.onerror = event => reject(event.name)
      })

      return Promise.all([stopped]).then(() => data)
   }

   stop = stream => {
      stream.getTracks().forEach(track => track.stop())
   }

   startRecording = () => {
      navigator.mediaDevices
         .getUserMedia({
            video: {
               cursor: 'always'
            },
            audio: {
               echoCancellation: true,
               noiseSuppression: true,
               sampleRate: 44100
            }
         })
         .then(stream => {
            this.preview.srcObject = stream
            this.downloadButton.href = stream
            this.preview.captureStream =
               this.preview.captureStream || this.preview.mozCaptureStream
            return new Promise(resolve => (this.preview.onplaying = resolve))
         })
         .then(() => this.start(this.preview.captureStream()))
         .then(recordedChunks => {
            let recordedBlob = new Blob(recordedChunks, { type: 'video/webm' })
            this.recording.src = URL.createObjectURL(recordedBlob)
            console.log('src ', this.recording.src)
            this.downloadButton.href = this.recording.src
            this.downloadButton.download = 'RecordedVideo.webm'
         })
   }
   stopRecording = () => {
      this.recorder.state === 'recording' && this.recorder.stop()
      this.stop(this.preview.srcObject)
   }
   render() {
      return (
         <>
            <div className='left'>
               <button
                  id='startButton'
                  onClick={() => this.startRecording()}
                  className='button'>
                  Start
               </button>
               <h2>Preview</h2>
               <video
                  id='preview'
                  ref={videoElement => (this.preview = videoElement)}
                  width='800'
                  height='500'
                  autoPlay
                  muted
               />
            </div>
            <div className='right'>
               <button
                  id='stopButton'
                  onClick={() => this.stopRecording()}
                  className='button'>
                  Stop
               </button>
               <h2>Recording</h2>
               <video
                  id='recording'
                  ref={recordingElement => (this.recording = recordingElement)}
                  width='800'
                  height='500'
                  controls
               />
               <button
                  id='downloadButton'
                  ref={download => (this.downloadButton = download)}
                  type='button'>
                  Download
               </button>
            </div>
         </>
      )
   }
}

export default WebCam
