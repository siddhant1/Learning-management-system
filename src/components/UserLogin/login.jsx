import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import PersonIcon from '@material-ui/icons/Person'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'
import './userlogin.css'

export default class SignIn extends React.Component {
   render() {
      return (
         <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className='paper'>
               <Avatar className='avatar'>
                  <PersonIcon />
               </Avatar>
               <Typography component='h1' variant='h5'>
                  Sign in
               </Typography>
               <form className='form' noValidate>
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

                  <Link to='/profile'>
                     <Button
                        fullWidth
                        variant='contained'
                        color='primary'
                        className='submit'>
                        Sign In
                     </Button>
                  </Link>

                  <Grid container>
                     <Grid item xs>
                        <Link to='/forgetpassword'>Forgot password ?</Link>
                     </Grid>
                     <Grid item>
                        <Link to='/signup'>
                           {"Don't have an account? Sign Up"}
                        </Link>
                     </Grid>
                  </Grid>
               </form>
            </div>
         </Container>
      )
   }
}
