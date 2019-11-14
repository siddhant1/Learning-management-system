import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ReactPath from '../../lib/ReactPath'
import AddLecture from '../addLecture/AddLecture'
import CreateNewPlaylist from '../create-new-playlist/CreateNewPlaylist'
import Header from '../header/header'
import Home from '../home/Home'
import ScribblePad from '../scribble-pad/ScribblePad'
import Forgetpassword from '../UserLogin/forgetpassword'
import Login from '../UserLogin/login'
import SignUp from '../UserLogin/signup'
import VideoPlayer from '../VideoPlayer'
// import Recording from '../Recording/Recording'
// import ScreenRecording from '../Recording/ScreenRecording'

export default class MainPage extends React.Component {
   render() {
      return (
         <div>
            <Header />
            <Switch>
               <Route exact path={ReactPath.homePath} component={Home} />
               <Route exact path={ReactPath.login} component={Login} />
               <Route exact path={ReactPath.signup} component={SignUp} />
               <Route
                  exact
                  path={ReactPath.forgetpassword}
                  component={Forgetpassword}
               />
               <Route exact path={ReactPath.scribble} component={ScribblePad} />
               <Route path={ReactPath.homePath} exact component={Home} />
               <Route path={ReactPath.login} component={Login} />
               <Route path={ReactPath.signup} component={SignUp} />
               <Route
                  path={ReactPath.forgetpassword}
                  component={Forgetpassword}
               />
               <Route path={ReactPath.scribble} component={ScribblePad} />
               <Route path={ReactPath.createPlaylist} component={AddLecture} />

               <Route
                  exact
                  path={ReactPath.createLesson}
                  component={AddLecture}
               />
               <Route
                  exact
                  path={ReactPath.newPlaylist}
                  component={CreateNewPlaylist}
               />
               <Route
                  exact
                  path={ReactPath.playVideo}
                  component={VideoPlayer}
               />

               <Route path={ReactPath.playVideo} component={VideoPlayer} />

               {/* <Route path={ReactPath.webCam} component={Recording}/>
               <Route path={ReactPath.screenRecord} component={ScreenRecording}/> */}
            </Switch>
         </div>
      )
   }
}
