import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import MainPage from './components/main-page/MainPage'
import ScribblePad from './components/scribble-pad/ScribblePad'
import createLecture from './components/createLecture/CreateLecture'
import ReactPath from './lib/ReactPath'

function App() {
   return (
      <div className='App'>
         <Switch>
            <Route path={ReactPath.homePath} exact component={MainPage}/>
            <Route path={ReactPath.scribble} component={ScribblePad}/>
            <Route path={ReactPath.createLecture} component={createLecture}/>
            {/*<Route path="/webcamrec" component={WebCamRecorder} />*/}
            {/*<Route path="/audiorec" component={AudioRecorder} />*/}
         </Switch>
      </div>
   )
}

export default App
