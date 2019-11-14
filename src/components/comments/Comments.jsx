import React from 'react'
import './Comments.css'
import CommentsBlock from 'simple-react-comments'

export default class Comments extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         comments: [
            {
               authorUrl: '#',
               avatarUrl:
                  'https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg',
               createdAt: new Date(),
               fullName: 'Name',
               text: 'some dummy comment !'
            }
         ]
      }
   }
   render() {
      return (
         <div>
            <CommentsBlock
               className="comments"
               comments={this.state.comments}
               signinUrl={'/signin'}
               isLoggedIn
               reactRouter={false} // set to true if you are using react-router
               onSubmit={text => {
                  if (text.length > 0) {
                     this.setState({
                        comments: [
                           ...this.state.comments,
                           {
                              authorUrl: '#',
                              avatarUrl:
                                 'https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg',
                              createdAt: new Date(),
                              fullName: 'Name',
                              text
                           }
                        ]
                     })
                     console.log('submit:', text)
                  }
               }}
            />
         </div>
      )
   }
}
