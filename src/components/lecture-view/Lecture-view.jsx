import React from 'react'
import API_END_POINTS from '../../utils/constants/apiEndPoint'
import Video from '../videos/Video'
import { PlusCircle } from 'react-feather'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

class LectureView extends React.Component {
   state = {
      course: {},
      loading: false
   }

   async componentDidMount() {
      this.setState({ loading: true })
      const course = await fetch(
         `${API_END_POINTS.createPlayList}/5dd02c901b6252030e45bdd4`,
         {
            headers: {
               'Content-Type': 'application/json',
               'x-auth-token': localStorage.authToken
            }
         }
      ).then(d => d.json())

      this.setState({ course: course[0], loading: false })
   }
   render() {
      if (this.state.loading) {
         return (
            <div style={{ margin: '41vh 50vw' }}>
               <CircularProgress />
            </div>
         )
      }
      return (
         <>
            <div
               className='home-page-content-text'
               style={{ margin: '33px 80px 0px 54px' }}>
               {this.state.course && this.state.course.name}
            </div>
            <div className='videos-container'>
               {this.state.course &&
                  this.state.course.lectures &&
                  this.state.course.lectures.map(video => (
                     <div
                        onClick={() =>
                           this.props.history.push(`/play/${video._id}`)
                        }
                        className='video-container'>
                        <img
                           className='video-thumbnail'
                           src={video && video.thumbnailImageUrl}
                           alt={video && video.thumbnailImageUrl}
                        />
                        <div className='lecture-title'>
                           {video && video.name}
                        </div>
                     </div>
                  ))}

               {!this.props.isNewFalse && (
                  <Link to='/newLesson'>
                     <div className='video-container add-video'>
                        <PlusCircle />
                        <div className='add-video-text'>{'Add Lecture'}</div>
                     </div>
                  </Link>
               )}
            </div>
         </>
      )
   }
}

export default LectureView