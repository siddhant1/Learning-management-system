import React from 'react'
import './ScribblePalette.css'
import {
  EditSharp,
  AddCircleOutlineRounded,
  CropSquareSharp,
  LinearScale
} from '@material-ui/icons'
import ColorPicker from './color-picker/ColorPicker'
import UndoRedoActionsComponent from './undo-redo-actions/UndoRedoActionsComponent'
export default class ScribblePalette extends React.Component {
  getColor = color => {
    this.props.getColor(color)
  }
  render () {
    return (
      <div className='palette-container'>
        <div className='shape-wrapper'>
          <div onClick={() => this.props.sendTool('pencil')}>
            <EditSharp />
          </div>
          <div onClick={() => this.props.sendTool('circle')}>
            <AddCircleOutlineRounded />
          </div>
          <div onClick={() => this.props.sendTool('rectangle')}>
            <CropSquareSharp />
          </div>
          <div onClick={() => this.props.sendTool('line')}>
            <LinearScale />
          </div>
          {/* <div onClick={() => this.props.sendTool('pan')}>
            <LinearScale />
          </div> */}
        </div>
        <div className='color-palette-wrapper'>
          <ColorPicker getColor={this.getColor} />
        </div>
        <div className='color-palette-wrapper'>
          <UndoRedoActionsComponent scribble={this.props.scribble} />
        </div>
      </div>
    )
  }
}
