import React from 'react'
var preview, recording, downloadButton, logElement
const recordingTimeMS = 10000;
class RecordingApi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    preview = document.getElementById('preview')
    recording = document.getElementById('recording')
    downloadButton = document.getElementById('downloadButton')
    logElement = document.getElementById('log')
  }
  log = msg => {
    //logElement.innerHTML += msg + "\n";
  }

  wait = delayInMS => {
    return new Promise(resolve => setTimeout(resolve, delayInMS))
  }

  start = (stream, lengthInMS) => {
    let recorder = new MediaRecorder(stream)
    let data = []

    recorder.ondataavailable = event => data.push(event.data)
    recorder.start()
    this.log(recorder.state + ' for ' + lengthInMS / 1000 + ' seconds...')

    let stopped = new Promise((resolve, reject) => {
      recorder.onstop = resolve
      recorder.onerror = event => reject(event.name)
    })

    let recorded = this.wait(lengthInMS).then(
      () => recorder.state === 'recording' && recorder.stop()
    )

    return Promise.all([stopped, recorded]).then(() => data)
  }

  stop = stream => {
    stream.getTracks().forEach(track => track.stop())
  }

  startRecording = () => {
    navigator.mediaDevices
      .getDisplayMedia({
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
        preview.srcObject = stream
        downloadButton.href = stream
        preview.captureStream =
          preview.captureStream || preview.mozCaptureStream
        return new Promise(resolve => (preview.onplaying = resolve))
      })
      .then(() => this.start(preview.captureStream(), recordingTimeMS))
      .then(recordedChunks => {
        let recordedBlob = new Blob(recordedChunks, { type: 'video/webm' })
        recording.src = URL.createObjectURL(recordedBlob)
        console.log('src ',recording.src);
        downloadButton.href = recording.src
        downloadButton.download = 'RecordedVideo.webm'

        this.log(
          'Successfully recorded ' +
            recordedBlob.size +
            ' bytes of ' +
            recordedBlob.type +
            ' media.'
        )
      })
  }
  stopRecording=()=>{
    this.stop(preview.srcObject);
  }
  render() {
    return (
      <>
        <div className='left'>
          <button id='startButton' onClick={()=>this.startRecording()} className='button'>
            Start
          </button>
          <h2>Preview</h2>
          <video id='preview' width='800' height='500' autoPlay muted></video>
        </div>

        <div className='right'>
          <button id='stopButton' onClick={()=>this.stopRecording()} className='button'>
            Stop
          </button>
          <h2>Recording</h2>
          <video id='recording' width='160' height='120' controls></video>
          <button id='downloadButton' type='button'>
            Download
          </button>
        </div>
      </>
    )
  }
}

export default RecordingApi
