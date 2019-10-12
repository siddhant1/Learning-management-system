import React, { Component } from 'react'
import './header.css'
import { User, Menu } from 'react-feather'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img src='../images/iteach-logo.png' alt='header' />
        <div>
          <User />
          <Menu />
        </div>
      </div>
    )
  }
}
