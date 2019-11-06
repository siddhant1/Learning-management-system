import React from 'react'
import { Form, Label, Input, Button } from 'reactstrap'

export default class AddImage extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         link: ''
      }
   }

   addImageViaLink = () => {
      console.log('this.props', this.props)
      this.props.scribble.addImg(this.state.link)
   }

   render() {
      return (
         <div>
            <Form>
               <Label for='exampleText'>import image from data link</Label>
               <Input
                  type='text'
                  name='text'
                  id='exampleText'
                  placeholder='enter a valid link'
                  value={this.state.link}
                  onChange={e => this.setState({ link: e.target.value })}
               />
               <Button onClick={this.addImageViaLink}>Submit</Button>
            </Form>
         </div>
      )
   }
}
