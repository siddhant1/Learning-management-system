import React, { Component } from 'react'
import './AddLecture.css'

export default class AddLecture extends Component {
   state = {
      methods: [
         {
            name: 'Artboard – 1.png',
            route: `/webCam/${this.props.match.params.id}`
         },
         {
            name: 'Artboard – 2.png',
            route: `/pen/${this.props.match.params.id}`
         },
         {
            name: 'Artboard – 3.png',
            route: `/screenRecord/${this.props.match.params.id}`
         },
         {
            name: 'Artboard – 4.png',
            route: `/text/${this.props.match.params.id}`
         },
         {
            name: 'Artboard – 5.png',
            route: `/video-editor`
         }
      ]
   }
   render() {
      console.log(this.props.match.params.id)
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
                        src={`../images/${img.name}`}
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
