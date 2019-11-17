import React, { Component } from 'react'
import { Menu, User } from 'react-feather'
import { Link, withRouter } from 'react-router-dom'
import './header.css'
class Header extends Component {
   logout = () => {
      localStorage.setItem('authToken', '')
      localStorage.setItem('role', '')
      this.props.history.push('/login')
   }
   render() {
      return (
         <div className='header'>
            <Link to='/'>
               <img src='../images/iteach-logo.png' alt='header' />
            </Link>
            <div>
               <span className='dropdon'>
                  <User />
                  {localStorage.getItem('authToken') && (
                     <div className='dropdon-content'>
                        <ul>
                           <li onClick={this.logout}>Log Out</li>
                        </ul>
                     </div>
                  )}
               </span>
               <Menu />
            </div>
         </div>
      )
   }
}
export default withRouter(Header)
