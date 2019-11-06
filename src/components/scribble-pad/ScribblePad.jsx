import React from 'react'
import { SketchField } from 'react-sketch'
import './ScribblePad.css'
import ScribblePalette from '../scribble-palette/ScribblePalette'
export default class ScribblePad extends React.Component {
  state = {
    color: 'white',
    tool: 'pencil'
  }

  setColor = color => {
    console.log('color', color)
    this.setState({ color: color })
  }
  sendTool = tool => {
    this.setState({ tool })
  }
  render () {
    return (
      <div className='container-background'>
        <div className='container-inner'>
          <div className='sub-container1'>
            <ScribblePalette
              getColor={this.setColor}
              sendTool={this.sendTool}
              scribble={this.scribble}
            />
          </div>
          <div className='sub-container2'>
            <SketchField
              width='100%'
              height={window.screen.height - 135}
              tool={this.state.tool}
              lineColor={this.state.color}
              lineWidth={3}
              ref={scribble => (this.scribble = scribble)}
              backgroundColor='black'
            />
          </div>
        </div>
      </div>
    )
  }
}
