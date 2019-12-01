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
import Axios from 'axios'
import API_END_POINTS from '../../utils/constants/apiEndPoint'
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/BounceLoader'

export default class SignIn extends React.Component {
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
   login = async event => {
      event.preventDefault()
      this.setState({
         submit: true
      })
      const { email, password, user } = this.state
      var requestBody = {
         email,
         password
      }
      try {
         let isLogin = await Axios.post(
            user === 'student'
               ? API_END_POINTS.studentLogin
               : API_END_POINTS.teacherLogin,
            requestBody
         )
         if (isLogin.data) {
            this.setState(
               {
                  submit: false
               },
               () => {
                  var authToken = isLogin.data
                  localStorage.setItem('authToken', authToken)
                  // alert('You Register Successfully');
                  user === 'teacher'
                     ? this.props.history.push('/')
                     : this.props.history.push('/student')

                  console.log('login Successful ')
               }
            )
         }
      } catch (error) {
         console.log('Error')
         this.setState({submit:false})
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
         <LoadingOverlay
            active={this.state.submit}
            spinner={<BounceLoader />}
            styles={{
               overlay: base => ({
                  ...base,
                  background: 'rgba(237, 247, 248, 0.3)'
               })
            }}>
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
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                     />

                     <Link to='/profile'>
                        <Button
                           fullWidth
                           variant='contained'
                           color='primary'
                           onClick={this.login}
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
            </div>
         </Container>
          </LoadingOverlay>
      )
   }
}
