import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'
import './userlogin.css'

export default class ForgetPassword extends React.Component {
   render() {
      return (
         <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className='paper'>
               <Avatar className='avatar'>
                  <VpnKeyIcon />
               </Avatar>
               <Typography component='h1' variant='h5'>
                  Reset Password
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

                  <Button
                     type='submit'
                     fullWidth
                     variant='contained'
                     color='primary'
                     className='submit'>
                     Send Reset Link
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
