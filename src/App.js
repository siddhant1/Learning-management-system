import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import MainPage from './components/main-page/MainPage'
import ScribblePad from './components/scribble-pad/ScribblePad'
// import RecordingAPI from './components/recordingApi/recordingApi2'
// import RecordingApi from './components/recordingApi/recordingApi';
import ScreenRecording from './components/Recording/ScreenRecording';
import Recording from './components/Recording/Recording';
// import WebCam from './components/webCam/webCam';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/scribble' component={ScribblePad} />
        <Route path='/recordingScreen' component={ScreenRecording}/>
        <Route path='/webCam' component={Recording}/>
        {/* <Route path="/webcamrec" component={WebCamRecorder} />
      <Route path="/audiorec" component={AudioRecorder} /> */}
      </Switch>
    </div>
  )
}

export default App
