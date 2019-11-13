import React, { Component } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { User, Menu } from 'react-feather'
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
