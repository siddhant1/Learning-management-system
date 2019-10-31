import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import PersonIcon from '@material-ui/icons/Person'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
   '@global': {
      body: {
         backgroundColor: theme.palette.common.white
      }
   },
   paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
   },
   avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
   },
   form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1)
   },
   submit: {
      margin: theme.spacing(3, 0, 2)
   }
}))

export default function SignIn() {
   const classes = useStyles()

   return (
      <Container component='main' maxWidth='xs'>
         <CssBaseline />
         <div className={classes.paper}>
            <Avatar className={classes.avatar}>
               <PersonIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
               Sign in
            </Typography>
            <form className={classes.form} noValidate>
               <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  autoFocus
               />
               <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
               />

               {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button> */}

               <RouterLink to='/profile'>
                  <Button
                     fullWidth
                     variant='contained'
                     color='primary'
                     className={classes.submit}>
                     Sign In
                  </Button>
               </RouterLink>

               <Grid container>
                  <Grid item xs>
                     <RouterLink to='/forgetpassword'>
                        Forgot password ?
                     </RouterLink>
                  </Grid>
                  <Grid item>
                     <RouterLink to='/signup'>
                        {"Don't have an account? Sign Up"}
                     </RouterLink>
                  </Grid>
               </Grid>
            </form>
         </div>
      </Container>
   )
}
