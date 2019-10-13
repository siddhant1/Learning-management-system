import React, { Component } from 'react'
import withStyles from '@material-ui/core/es/styles/withStyles'
import { loadCSS } from 'fg-loadcss'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import ReactPath from '../../lib/ReactPath'
import classnames from 'classnames'
import ScreenShareTwoToneIcon from '@material-ui/icons/ScreenShareTwoTone'
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone'
import VideocamTwoToneIcon from '@material-ui/icons/VideocamTwoTone'

const styles = theme => ({
   root: {
      flexGrow: 1,
   },
   card: {
      maxWidth: 275,
      // fontSize: '6rem'
   },
   bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
   },
   icon: {
      width: theme.spacing(10),
      height: theme.spacing(10),
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4)
   },
   gradient: {
      background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
      fallbacks: [
         {
            background: '-webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'
         },
         {
            background: '-moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
         },
         {
            background: '#f09433'
         }
      ],
      filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#f09433\', endColorstr=\'#bc1888\',GradientType=1 )'
   }
})

class CreateLecture extends Component {
   constructor(props) {
      super(props)
      this.state = {
         // open: false,
         selectedOption: undefined
      }
   }

   componentDidMount = () => {
      loadCSS(
         'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
         document.querySelector('#font-awesome-css')
      )
   }

   render() {
      const { classes } = this.props
      return (
         <div className={classes.root}>
            <Grid container spacing={3} justify="center">
               <Grid item>
                  <Card className={classnames(classes.card, classes.gradient)}>
                     <CardActionArea onClick={() => {
                        ReactPath.navigateTo(this.props, ReactPath.scribble)
                     }}>
                        <Grid container direction={'row'} alignItems="center" justify="center">
                           <CreateTwoToneIcon className={classes.icon}/>
                        </Grid>

                        <CardContent>
                           <Typography style={{ color: 'white' }} gutterBottom variant="h5" component="h2">
                              {'Scribble Pad'}
                           </Typography>
                           <Typography style={{ color: 'white' }} variant="body2" color="textSecondary" component="p">
                              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                              across all continents except Antarctica
                           </Typography>
                        </CardContent>

                     </CardActionArea>
                  </Card>
               </Grid>


               <Grid item>
                  <Card className={classnames(classes.card, classes.gradient)}>
                     <CardActionArea onClick={() => {
                        ReactPath.navigateTo(this.props, ReactPath.screenRecord)
                     }}>
                        <Grid container direction={'row'} alignItems="center" justify="center">
                           <ScreenShareTwoToneIcon className={classes.icon}/>
                        </Grid>

                        <CardContent>
                           <Typography style={{ color: 'white' }} gutterBottom variant="h5" component="h2">
                              {'Screen Record'}
                           </Typography>
                           <Typography style={{ color: 'white' }} variant="body2" color="textSecondary" component="p">
                              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                              across all continents except Antarctica
                           </Typography>
                        </CardContent>

                     </CardActionArea>
                  </Card>
               </Grid>

               <Grid item>
                  <Card className={classnames(classes.card, classes.gradient)}>
                     <CardActionArea onClick={() => {
                        ReactPath.navigateTo(this.props, ReactPath.webcam)
                     }}>
                        <Grid container direction={'row'} alignItems="center" justify="center">
                           <VideocamTwoToneIcon className={classes.icon}/>
                        </Grid>

                        <CardContent>
                           <Typography style={{ color: 'white' }} gutterBottom variant="h5" component="h2">
                              {'Webcam'}
                           </Typography>
                           <Typography style={{ color: 'white' }} variant="body2" color="textSecondary" component="p">
                              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                              across all continents except Antarctica
                           </Typography>
                        </CardContent>

                     </CardActionArea>
                  </Card>
               </Grid>

            </Grid>
         </div>
      )
   }
}

export default withStyles(styles)(CreateLecture)