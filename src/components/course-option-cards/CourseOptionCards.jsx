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
import './CourseOptionCards.css'
import CreatePlaylistActionButton from '../create-playlist/CreatePlaylistActionButton'
export default class CourseOptionCards extends React.Component {
   state = {
      showOptions: false
   }

   render() {
      return (
         <div>
            {this.state.showOptions && (
               <div className='wrapper'>
                  <div className='wrapper-card-item'>
                     <Card>
                        <CardImg
                           top
                           width='100%'
                           src='https://previews.123rf.com/images/ylivdesign/ylivdesign1607/ylivdesign160703695/60052321-webcam-icon-in-cartoon-style-on-a-white-background.jpg'
                           alt='Card image cap'
                           height='350px'
                        />
                        <CardBody>
                           <CardTitle>Card title</CardTitle>
                           <CardSubtitle>Card subtitle</CardSubtitle>
                           <CardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                           </CardText>
                           <Button>Button</Button>
                        </CardBody>
                     </Card>
                  </div>
                  <div className='wrapper-card-item'>
                     <Card>
                        <CardImg
                           top
                           width='100%'
                           src='https://previews.123rf.com/images/ylivdesign/ylivdesign1607/ylivdesign160703695/60052321-webcam-icon-in-cartoon-style-on-a-white-background.jpg'
                           alt='Card image cap'
                           height='350px'
                        />
                        <CardBody>
                           <CardTitle>Card title</CardTitle>
                           <CardSubtitle>Card subtitle</CardSubtitle>
                           <CardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                           </CardText>
                           <Button>Button</Button>
                        </CardBody>
                     </Card>
                  </div>
                  <div className='wrapper-card-item'>
                     <Card>
                        <CardImg
                           top
                           width='100%'
                           src='https://previews.123rf.com/images/ylivdesign/ylivdesign1607/ylivdesign160703695/60052321-webcam-icon-in-cartoon-style-on-a-white-background.jpg'
                           alt='Card image cap'
                           height='350px'
                        />
                        <CardBody>
                           <CardTitle>Card title</CardTitle>
                           <CardSubtitle>Card subtitle</CardSubtitle>
                           <CardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                           </CardText>
                           <Button>Button</Button>
                        </CardBody>
                     </Card>
                  </div>
               </div>
            )}
            <div className='action-button'>
               <CreatePlaylistActionButton
                  callback={() =>
                     this.setState({
                        showOptions: !this.state.showOptions
                     })
                  }
               />
            </div>
         </div>
      )
   }
}
