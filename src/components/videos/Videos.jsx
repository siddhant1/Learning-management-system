import React, { Component } from 'react'
import Video from './Video'
import './videos.css'
import './video.css'
import { PlusCircle } from 'react-feather'

export default class Videos extends Component {
   state = {
      videos: [
         {
            title: 'Merge Sort',
            thumbnailImage:
               'https://s3-us-west-2.amazonaws.com/tutorials-image/merge+sort+working.png'
         },
         {
            title: 'Insertion Sort',
            thumbnailImage:
               'https://media.geeksforgeeks.org/wp-content/uploads/insertionsort.png'
         },
         {
            title: 'Heap Sort',
            thumbnailImage:
               'https://he-s3.s3.amazonaws.com/media/uploads/c9fa843.png'
         },
         {
            title: 'Quick Sort',
            thumbnailImage:
               'https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/01/QuickSort2.png'
         },
         {
            title: 'Radix Sort',
            thumbnailImage:
               'data:image/png;base64,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'
         },
         {
            title: 'Tim Sort',
            thumbnailImage:
               'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/One-one_merging_timsort.svg/280px-One-one_merging_timsort.svg.png'
         }
      ]
   }
   render() {
      return (
         <div className='videos-container'>
            {this.state.videos.map(video => (
               <Video video={video} />
            ))}
            <div className='video-container add-video'>
               <PlusCircle />
               <div className='add-video-text'>{'Add Lecture'}</div>
            </div>
         </div>
      )
   }
}
