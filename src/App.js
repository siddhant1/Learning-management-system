import React from 'react'
import './App.css'
import MainPage from './components/main-page/MainPage'
import ScribblePad from './components/scribble-pad/ScribblePad'
import createLecture from './components/createLecture/CreateLecture'
import ReactPath from './lib/ReactPath'
import { Route, Switch } from 'react-router'

function App() {
   return (
      <div className='App'>
         <Switch>
            <Route path={ReactPath.homePath} exact component={MainPage} />
            <Route path={ReactPath.scribble} component={ScribblePad} />
            <Route path={ReactPath.createLecture} component={createLecture} />
            {/*<Route path="/webcamrec" component={WebCamRecorder} />*/}
            {/*<Route path="/audiorec" component={AudioRecorder} />*/}
         </Switch>
         <MainPage />
      </div>
   )
}

export default App
