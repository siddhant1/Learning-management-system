import React, { Component } from 'react'
import LoadingOverlay from 'react-loading-overlay'
import API_END_POINTS from '../../utils/constants/apiEndPoint'
import BounceLoader from 'react-spinners/BounceLoader'
import swal from 'sweetalert'
import './studentDashboard.css'

class StudentDashboard extends Component {
   constructor(props) {
      super(props)
      this.state = {
         loading: false,
         courses: []
      }
   }

   async componentDidMount() {
      if (!localStorage.getItem('authToken')) {
         this.props.history.push('/login')
         return
      }
      try {
         this.setState({
            loader: true
         })
         const courses = await fetch(API_END_POINTS.getPlayList).then(res =>
            res.json()
         )
         console.log(courses)
         this.setState({ listOfCourses: courses, loader: false })
      } catch (error) {
         this.setState({
            loader: false
         })
         swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please Try Again'
         })
      }
   }
   showLecture = courseId => {
      localStorage.setItem('role', 'student')
      this.props.history.push(`/course/${courseId}`)
   }
   render() {
      const { listOfCourses, loading } = this.state
      return (
         <>
            <LoadingOverlay
               active={this.state.submit}
               spinner={<BounceLoader />}
               styles={{
                  overlay: base => ({
                     ...base,
                     background: 'rgba(237, 247, 248, 0.3)'
                  })
               }}>
               {!loading && listOfCourses && listOfCourses.length > 0 ? (
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
                              </div>
                              <div className='row'>
                                 <div className='col-md-5'>
                                    Lectures :{' '}
                                    {(course.lectures &&
                                       course.lectures.length) ||
                                       0}
                                 </div>
                                 <div className='col-md-7'>
                                    Created On :
                                    {course.dateCreated || '12-8-2019'}
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               ) : (
                  !loading && (
                     <div className='no-course'>No Course Available</div>
                  )
               )}
            </LoadingOverlay>
         </>
      )
   }
}

export default StudentDashboard
