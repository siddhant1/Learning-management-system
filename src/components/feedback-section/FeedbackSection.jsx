import React from 'react'
import './FeedbackSection.css'
import Comments from '../comments/Comments'
export default class FeedbackSection extends React.Component {
   render() {
      return (
         <div style={{margin:'40px 0px'}}>
            <Comments />
         </div>
      )
   }
}
