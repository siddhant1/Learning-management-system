import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
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
               <VpnKeyIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
               Reset Password
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

               <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='primary'
                  className={classes.submit}>
                  Send Reset Link
               </Button>
               <Grid container justify='flex-end'>
                  <Grid item>
                     <RouterLink to='/login'>
                        Already have an account? Sign in
                     </RouterLink>
                  </Grid>
               </Grid>
            </form>
         </div>
      </Container>
   )
}
