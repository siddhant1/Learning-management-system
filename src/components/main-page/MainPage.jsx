import React from 'react'
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'
export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
      </div>
    )
  }
}
