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
import Axios from 'axios'
import API_END_POINTS from '../../utils/constants/apiEndPoint'

export default class SignUp extends React.Component {
   state = {
      user: 'student'
   }
   handleChange = event => {
      event.preventDefault()
      this.setState(
         {
            [event.target.name]: event.target.value
         },
         () => {
            console.log('this.state ', this.state)
         }
      )
   }
   signUp = async event => {
      event.preventDefault()
      this.setState({
         submit: true
      })
      const { email, password, user, lastName, firstName } = this.state
      var requestBody = {
         name: firstName + lastName,
         email,
         password
      }
      try {
         let isSign = await Axios.post(
            user === 'student'
               ? API_END_POINTS.studentSignUp
               : API_END_POINTS.teacherSignUp,
            requestBody
         )
         if (isSign.data) {
            this.setState(
               {
                  submit: false
               },
               () => {
                  console.log(isSign)
                  // var authToken = isSign.headers['x-auth-token']
                  var authToken = isSign.data

                  localStorage.setItem('authToken', authToken)
                  // alert('You Register Successfully');
                  this.props.history.push('/')
                  console.log('signUp Successful ')
               }
            )
         }
      } catch (error) {
         console.log('Error', error)
      }
   }
   makeActive = ref => {
      if (ref === 'studentRef') {
         !this.studentRef.classList.contains('active') &&
            this.studentRef.classList.add('active')
         this.teacherRef.classList.contains('active') &&
            this.teacherRef.classList.remove('active')
         this.setState({
            user: 'student'
         })
      } else if (ref === 'teacherRef') {
         !this.teacherRef.classList.contains('active') &&
            this.teacherRef.classList.add('active')
         this.studentRef.classList.contains('active') &&
            this.studentRef.classList.remove('active')
         this.setState({
            user: 'teacher'
         })
      }
   }
   render() {
      return (
         <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className='paper'>
               <div className='user_card'>
                  <ul className='tab-group'>
                     <li
                        className='tab active'
                        ref={element => (this.studentRef = element)}
                        onClick={() => this.makeActive('studentRef')}>
                        <span>Student</span>
                     </li>
                     <li
                        className='tab'
                        ref={element => (this.teacherRef = element)}
                        onClick={() => this.makeActive('teacherRef')}>
                        <span>Teacher</span>
                     </li>
                  </ul>
                  <div className='d-flex justify-content-center'>
                     <div className='brand_logo_container'>
                        <i
                           className='fa fa-user brand-logo'
                           aria-hidden='true'
                        />
                     </div>
                  </div>
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
                              onChange={this.handleChange}
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
                              onChange={this.handleChange}
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
                              onChange={this.handleChange}
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
                              onChange={this.handleChange}
                           />
                        </Grid>
                     </Grid>
                     <br />
                     <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        onClick={this.signUp}
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
            </div>
         </Container>
      )
   }
}
