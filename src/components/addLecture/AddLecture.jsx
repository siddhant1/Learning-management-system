import React, { Component } from 'react'
import { Monitor, Video, Edit2 } from 'react-feather'
import './AddLecture.css'

export default class AddLecture extends Component {
   state = {
      methods: [
         'Artboard – 1.png',
         'Artboard – 2.png',
         'Artboard – 3.png',
         'Artboard – 4.png',
         'Artboard – 5.png'
      ]
   }
   render() {
      return (
         <div className="flex-container">
            <div className="feature-text">Create Lesson using features below</div>
            <div className='methods-container'>
               {this.state.methods.map(img => (
                  <div className='method'>
                     <img key={img} src={`./images/${img}`} alt={img} />
                  </div>
               ))}
            </div>
         </div>
      )
   }
}
