import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'
import './userlogin.css'

export default class SignUp extends React.Component {
   render() {
      return (
         <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className='paper'>
               <Avatar className='avatar'>
                  <VerifiedUserIcon />
               </Avatar>
               <Typography component='h1' variant='h5'>
                  Sign up
               </Typography>
               <form className='form' noValidate>
                  <Grid container spacing={2}>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           autoComplete='fname'
                           name='firstName'
                           variant='outlined'
                           required
                           fullWidth
                           id='firstName'
                           label='First Name'
                           autoFocus
                        />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           variant='outlined'
                           required
                           fullWidth
                           id='lastName'
                           label='Last Name'
                           name='lastName'
                           autoComplete='lname'
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           variant='outlined'
                           required
                           fullWidth
                           id='email'
                           label='Email Address'
                           name='email'
                           autoComplete='email'
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           variant='outlined'
                           required
                           fullWidth
                           name='password'
                           label='Password'
                           type='password'
                           id='password'
                           autoComplete='current-password'
                        />
                     </Grid>
                  </Grid>
                  <br></br>
                  <Button
                     type='submit'
                     fullWidth
                     variant='contained'
                     color='primary'
                     className='submit'>
                     Sign Up
                  </Button>
                  <Grid container justify='flex-end'>
                     <Grid item>
                        <Link to='/login'>
                           Already have an account? Sign in
                        </Link>
                     </Grid>
                  </Grid>
               </form>
            </div>
         </Container>
      )
   }
}
