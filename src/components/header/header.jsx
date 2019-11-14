import React, { Component } from 'react'
import { Menu, User } from 'react-feather'
import { Link } from 'react-router-dom'
import './header.css'
export default class Header extends Component {
   render() {
      return (
         <div className='header'>
            <Link to='/'>
               <img src='../images/iteach-logo.png' alt='header' />
            </Link>
            <div>
               <Link to='/login'>
                  <User />
               </Link>
               <Menu />
            </div>
         </div>
      )
   }
}
