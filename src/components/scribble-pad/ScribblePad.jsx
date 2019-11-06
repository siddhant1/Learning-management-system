import React from 'react'
import { SketchField } from 'react-sketch'
import './ScribblePad.css'
import ScribblePalette from '../scribble-palette/ScribblePalette'
export default class ScribblePad extends React.Component {
   state = {
      color: 'white',
      tool: 'pencil',
      stroke: 3,
      scribbleRef: null
   }

   setColor = color => {
      console.log('color', color)
      this.setState({ color: color })
   }
   sendTool = tool => {
      this.setState({ tool })
   }

   getStroke = stroke => {
      this.setState({ stroke })
   }

   componentDidMount() {
      this.setState({
         scribbleRef: this.scribble
      })
   }

   render() {
      return (
         <div className='container-background'>
            <div className='container-inner'>
               <div className='sub-container1'>
                  <ScribblePalette
                     getColor={this.setColor}
                     sendTool={this.sendTool}
                     scribble={this.state.scribbleRef}
                     getStroke={this.getStroke}
                  />
               </div>
               <div className='sub-container2'>
                  <SketchField
                     width='100%'
                     height={window.screen.height - 135}
                     tool={this.state.tool}
                     lineColor={this.state.color}
                     lineWidth={this.state.stroke}
                     ref={scribble => (this.scribble = scribble)}
                     backgroundColor='black'
                  />
               </div>
            </div>
         </div>
      )
   }
}
