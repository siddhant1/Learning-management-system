import React, { Component } from 'react'
import {
   ButtonBack,
   ButtonNext,
   CarouselProvider,
   DotGroup,
   Slide,
   Slider
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { withStyles } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import classNames from 'classnames'

const styles = theme => ({
   root: {
      margin: theme.spacing(1),
      border: '1px solid black',
      height: theme.spacing(33.7)
   },
   content: {
      // height: '100%',
      width: '100%'
      // backgroundPattern:'fill'
   },
   nvgt: {
      position: 'absolute',
      top: theme.spacing(14),
      height: 50,
      width: 50,
      opacity: '0.6',
      borderRadius: '50%',
      '&:hover': {
         opacity: '0.9'
      }
   },
   prev: {
      // background: '#000 url(\'./image/prev.png\') no-repeat center',
      left: 5
   },
   next: {
      // background: '#000 url(\'./image/next.png\') no-repeat center',
      right: 5
   },
   dots: {
      position: 'absolute',
      top: theme.spacing(30),
      borderRadius: '50%',
      // height: 50,
      // width: 50,
      right: '50%'
   }
})

class LandingPageCarousel extends Component {
   constructor(props) {
      super(props)
      this.state = {}
   }

   render() {
      const { classes } = this.props
      return (
         <>
            <div className={classes.root}>
               <CarouselProvider
                  naturalSlideWidth={30}
                  naturalSlideHeight={8}
                  totalSlides={3}>
                  <Slider>
                     <Slide index={0}>
                        <img
                           className={classes.content}
                           src='https://www.irishtimes.com/polopoly_fs/1.3942790.1565937760!/image/image.jpg_gen/derivatives/box_620_330/image.jpg'
                           alt=''
                        />
                        {/*<div*/}
                        {/*   className={classes.content}*/}
                        {/*   style={{ background: 'red' }}>*/}
                        {/*   I am the first Slide.*/}
                        {/*</div>*/}
                     </Slide>
                     <Slide index={1}>
                        <img
                           className={classes.content}
                           src='https://res.cloudinary.com/highereducation/image/upload/v1533591754/TheBestColleges.org/study-notebooks.jpg'
                           alt=''
                        />
                        {/*<div*/}
                        {/*   className={classes.content}*/}
                        {/*   style={{ background: 'blue' }}>*/}
                        {/*   I am the second Slide.*/}
                        {/*</div>*/}
                     </Slide>
                     <Slide index={2}>
                        <img
                           className={classes.content}
                           src='http://www.insidehighered.com/sites/default/server_files/media/iStock-520374378.jpg'
                           alt=''
                        />
                        {/*<div*/}
                        {/*   className={classes.content}*/}
                        {/*   style={{ background: 'green' }}>*/}
                        {/*   I am the third Slide.*/}
                        {/*</div>*/}
                     </Slide>
                  </Slider>
                  <DotGroup className={classNames(classes.dots)} />
                  <ButtonBack
                     className={classNames(classes.nvgt, classes.prev)}>
                     <ArrowBackIosIcon />
                  </ButtonBack>
                  <ButtonNext
                     className={classNames(classes.nvgt, classes.next)}>
                     <ArrowForwardIosIcon />
                  </ButtonNext>
               </CarouselProvider>
            </div>
         </>
      )
   }
}

export default withStyles(styles)(LandingPageCarousel)
