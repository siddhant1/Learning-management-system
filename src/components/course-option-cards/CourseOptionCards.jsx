import React from 'react'
import {
   Card,
   CardImg,
   CardText,
   CardBody,
   CardTitle,
   CardSubtitle,
   Button
} from 'reactstrap'
import { fadeIn } from 'react-animations'
import { ArrowRight } from 'react-feather'
import { PortalWithState } from 'react-portal'
import { Input, InputGroup, InputGroupAddon } from 'reactstrap'
import Modal from '../../Modal/Modal'
import './CourseOptionCards.css'
import CreatePlaylistActionButton from '../create-playlist/CreatePlaylistActionButton'
import Axios from 'axios'
import API_END_POINTS from '../../utils/constants/apiEndPoint'
import swal from 'sweetalert'
import { CircularProgress } from '@material-ui/core'
import { withRouter } from 'react-router'
class CourseOptionCards extends React.Component {
   state = {
      listOfCourses: [],
      showOptions: false,
      loading: false,
      showModal: false,
      selectedCourse: ''
   }
   componentDidMount() {
      // console.log('accasc', this.props.history)
      this.getCourses()
   }
   getCourses = async () => {
      this.setState({
         loading: true
      })
      try {
         let authToken = localStorage.getItem('authToken')
         // if(authToken){
         let requestHeader = {
            headers: { 'x-auth-token': authToken }
         }
         // }
         let course = await Axios.get(API_END_POINTS.getPlayList, requestHeader)
         this.setState(
            {
               listOfCourses: course.data,
               loading: false
            },
            () => {
               console.log(course)
            }
         )
      } catch (error) {
         swal(error.response)
         this.setState({
            loading: false
         })
      }
   }
   createPlayList = async event => {
      event.preventDefault()
      this.setState({
         loading: true
      })
      const { playList: name } = this.state
      let requestBody = {
         name
      }
      let requestHeader = {
         headers: { 'x-auth-token': localStorage.getItem('authToken') }
      }
      try {
         let playList = await Axios.post(
            API_END_POINTS.createPlayList,
            requestBody,
            requestHeader
         )
         if (playList.data) {
            this.setState({ showOptions: true, loading: false })
            this.getCourses()
         }
      } catch (error) {
         swal('error ' + error)
         this.setState({
            loading: false
         })
      }
   }
   handleChange = event => {
      event.preventDefault()
      this.setState({
         [event.target.name]: event.target.value
      })
   }
   showLecture = courseId => {
      this.props.history.push(`/course/${courseId}`)
   }
   showModal = course => {
      this.setState({
         showModal: true,
         selectedCourse: course
      })
   }
   closeModal = () => {
      this.setState({
         showModal: false,
         selectedCourse: ''
      })
   }
   saveCourseEdition = async () => {
      this.setState({
         loading: true
      })
      try {
         let authToken = localStorage.getItem('authToken')
         // if(authToken){
         let requestHeader = {
            headers: { 'x-auth-token': authToken }
         }
         let requestBody = {
            name: this.state.courseName,
            createdBy: this.state.selectedCourse.createdBy
         }
         console.log(requestBody)
         // console.log(this.state.selectedCourse._id)
         let course = await Axios.put(
            `${API_END_POINTS.getPlayList}/${this.state.selectedCourse._id}`,
            requestBody,
            requestHeader
         )
         this.getCourses()
      } catch (error) {
         swal(error.response)
         this.setState({
            showModal: false
         })
      }
   }
   render() {
      const { listOfCourses, loading, showModal, selectedCourse } = this.state
      return (
         <div className='course-list-container'>
            <h2>Courses</h2>
            <div className='course-cards-container'>
               {loading && (
                  <div className='circular-loader'>
                     <CircularProgress />
                  </div>
               )}
               {!loading && listOfCourses.length > 0 ? (
                  <div className='course-card row'>
                     {listOfCourses.map(course => (
                        <div
                           class='card col-md-3'
                           onClick={event => {
                              event.stopPropagation()
                              this.showLecture(course._id)
                           }}>
                           <img
                              src='http://connectedcourses.net/wp-content/uploads/2015/01/course.png'
                              class='card-img-top'
                              alt='course_image'
                           />
                           <div class='card-body'>
                              <div className='row course-head'>
                                 <div className='col-md-10'>
                                    {course.name || 'New Course'}
                                 </div>
                                 <div className='col-md-2'>
                                    <button
                                       className='btn btn-primary'
                                       onClick={event => {
                                          event.stopPropagation()
                                          this.showModal(course)
                                       }}>
                                       <i
                                          class='fa fa-ellipsis-v'
                                          title='Edit'
                                       />
                                    </button>
                                 </div>
                              </div>
                              <div className='row'>
                                 <div className='col-md-5'>
                                    Lectueres : {course.lectures.length || 0}
                                 </div>
                                 <div className='col-md-7'>
                                    Created On :
                                    {course.dateCreated || '12-8-2019'}
                                 </div>
                                 <div className='col-md-6'>
                                    Published :{course.isPublished || ' False'}
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               ) : (
                  !loading && (
                     <div className='no-course'>
                        No Course Available, Just Go and add One
                     </div>
                  )
               )}
               <PortalWithState closeOnEsc>
                  {({ openPortal, closePortal, isOpen, portal }) => (
                     <React.Fragment>
                        <CreatePlaylistActionButton
                           callback={isOpen ? closePortal : openPortal}
                        />
                        {portal(
                           <div className='portal'>
                              <div
                                 style={{ display: 'flex', marginTop: '20px' }}>
                                 <p style={{ marginTop: '7px' }}>
                                    Enter Playlist Name:
                                 </p>

                                 <InputGroup>
                                    <Input
                                       name='playList'
                                       onChange={this.handleChange}
                                    />
                                    <InputGroupAddon addonType='append'>
                                       <Button onClick={this.createPlayList}>
                                          <ArrowRight />
                                       </Button>
                                    </InputGroupAddon>
                                 </InputGroup>
                              </div>
                              <br />
                           </div>
                        )}
                     </React.Fragment>
                  )}
               </PortalWithState>
            </div>
            <Modal handleClose={this.closeModal} show={this.state.showModal}>
               <div className='course-edit form-group'>
                  <div className='row'>
                     <div className='col-md-5'>Course Name</div>
                     <div className='col-md-7'>
                        <input
                           type='text'
                           name='courseName'
                           onChange={this.handleChange}
                           className='form-control'
                           defaultValue={selectedCourse.name}
                        />
                     </div>
                  </div>
                  <div className='row'>
                     <div className='col-md-5'>Published</div>
                     <div className='col-md-7'>
                        <select
                           name='isPublished'
                           onChange={this.handleChange}
                           className='form-control'>
                           <option defaultValue='select'>Select</option>
                           <option value='true'>True</option>
                        </select>
                     </div>
                  </div>
                  <div className='row save-button'>
                     <button
                        className='btn btn-primary'
                        onClick={() => this.saveCourseEdition()}>
                        Save
                     </button>
                  </div>
               </div>
            </Modal>
         </div>
      )
   }
}
export default withRouter(CourseOptionCards)
