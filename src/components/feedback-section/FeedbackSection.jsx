import React from 'react'
import Comments from '../comments/Comments'
import './FeedbackSection.css'
export default class FeedbackSection extends React.Component {
   render() {
      return (
         <div style={{ margin: '40px 0px' }}>
            <Comments />
         </div>
      )
   }
}
