import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../header/header'
import AddLecture from '../addLecture/AddLecture'
import ScribblePad from '../scribble-pad/ScribblePad'
import ReactPath from '../../lib/ReactPath'
import Home from '../home/Home'
import CreateNewPlaylist from '../create-new-playlist/CreateNewPlaylist'
export default class MainPage extends React.Component {
   render() {
      return (
         <div>
            <Header />
            <Switch>
               <Route path={ReactPath.homePath} exact component={Home} />
               <Route path={ReactPath.scribble} component={ScribblePad} />
               <Route path={ReactPath.createPlaylist} component={AddLecture} />
               <Route
                  path={ReactPath.newPlaylist}
                  component={CreateNewPlaylist}
               />
               {/*<Route path ="/webcamrec" component={WebCamRecorder} />*/}
               {/*<Route path="/audiorec" component={AudioRecorder} />*/}
            </Switch>
         </div>
      )
   }
}
