import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import ReactPath from '../../lib/ReactPath'
import AddLecture from '../addLecture/AddLecture'
import CreateNewPlaylist from '../create-new-playlist/CreateNewPlaylist'
import Header from '../header/header'
import Home from '../home/Home'
import LandingPage from '../landingPage/LandingPage'
import Recording from '../Recording/Recording'
import ScreenRecording from '../Recording/ScreenRecording'
import ScribblePad from '../scribble-pad/ScribblePad'
import Forgetpassword from '../UserLogin/forgetpassword'
import { default as Login } from '../UserLogin/login'
import SignUp from '../UserLogin/signup'
import VideoPlayer from '../VideoPlayer'
import LectureView from '../lecture-view/Lecture-view'
import VideoEditor from '../video-editor/VideoEditor'

class MainPage extends React.Component {
   componentDidMount() {
      if (localStorage.getItem('authToken')) {
      } else {
         this.props.history.push('/login')
      }
   }

   render() {
      return (
         <div>
            <Header />
            <Switch>
               <Route exact path={ReactPath.homePath} component={Home} />
               <Route exact path={ReactPath.login} component={Login} />
               <Route exact path={ReactPath.signup} component={SignUp} />
               <Route exact path={ReactPath.scribble} component={ScribblePad} />
               <Route
                  exact
                  path={ReactPath.courseView}
                  component={LectureView}
               />
               <Route
                  exact
                  path={ReactPath.forgetpassword}
                  component={Forgetpassword}
               />
               <Route
                  path={ReactPath.videoEditor}
                  exact
                  component={VideoEditor}
               />
               <Route
                  path={ReactPath.newPlaylist}
                  exact
                  component={CreateNewPlaylist}
               />
               <Route
                  path={ReactPath.playVideo}
                  exact
                  component={VideoPlayer}
               />
               <Route exact path={ReactPath.newLesson} component={AddLecture} />
               <Route
                  exact
                  path={ReactPath.playVideo}
                  component={VideoPlayer}
               />
               <Route path={ReactPath.landingPage} component={LandingPage} />
               {/* <Route path={ReactPath.webCam} component={Recording}/>
               <Route path={ReactPath.screenRecord} component={ScreenRecording}/> */}
               <Route
                  exact
                  path={ReactPath.screenRecord}
                  component={ScreenRecording}
               />
               <Route exact path={ReactPath.webCam} component={Recording} />
            </Switch>
         </div>
      )
   }
}
export default withRouter(MainPage)
