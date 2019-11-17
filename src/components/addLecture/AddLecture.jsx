import React, { Component } from 'react'
import './AddLecture.css'

export default class AddLecture extends Component {
   state = {
      methods: [
         {
            name: 'Artboard – 1.png',
            route: '/webcam/5dd02c901b6252030e45bdd4'
         },
         { name: 'Artboard – 2.png', route: '/pen' },
         { name: 'Artboard – 3.png', route: '/screenRecord' },
         { name: 'Artboard – 4.png', route: '/text' },
         { name: 'Artboard – 5.png', route: '/uploadImage' }
      ]
   }
   render() {
      return (
         <div className='flex-container'>
            <div className='feature-text'>
               Create Lesson using features below
            </div>
            <div className='methods-container'>
               {this.state.methods.map(img => (
                  <div className='method'>
                     <img
                        key={img.name}
                        src={`./images/${img.name}`}
                        alt={img.name}
                        onClick={() => this.props.history.push(img.route)}
                     />
                  </div>
               ))}
            </div>
         </div>
      )
   }
}
