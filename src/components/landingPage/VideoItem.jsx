import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import ReactPath from '../../lib/ReactPath'
import moment from 'moment'

const styles = theme => ({
   card: {
      margin: theme.spacing(2),
      width: theme.spacing(30)
   },
   optionName: {},
   thumbnailImage: {
      width: '100%'
   },
   videoTitle: {
      fontWeight: 'bold'
   }
})

class OptionCard extends Component {
   static defaultProps = {
      name: 'default',
      lectureUrl: 'http://localhost:3000/landingPage',
      thumbnailImageUrl:
         'https://cdn.pixabay.com/photo/2013/07/12/17/47/test-pattern-152459__340.png',
      isPublished: false,
      dateCreated: Date.now(),
      feedback: 'lol'
   }

   constructor(props) {
      super(props)
      this.state = {
         backgroundColor: ''
      }
   }

   render() {
      const { classes } = this.props
      return (
         <>
            <Card className={classes.card}>
               <CardActionArea
                  onClick={() => {
                     ReactPath.navigateTo(
                        this.props,
                        this.props.videoObj.lectureUrl
                     )
                  }}>
                  <CardContent>
                     <img
                        className={classes.thumbnailImage}
                        src={this.props.videoObj.thumbnailImageUrl}
                        alt=''
                     />
                     <Typography
                        variant='subtitle1'
                        className={classes.videoTitle}
                        gutterBottom>
                        {this.props.videoObj.name}
                     </Typography>
                     <Typography variant='caption' gutterBottom>
                        {moment(this.props.videoObj.dateCreated).fromNow()}
                     </Typography>
                  </CardContent>
               </CardActionArea>
            </Card>
         </>
      )
   }
}

export default withStyles(styles)(OptionCard)
