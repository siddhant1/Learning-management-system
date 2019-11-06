import React from 'react'
import './ScribblePalette.css'
import {
   EditSharp,
   AddCircleOutlineRounded,
   CropSquareSharp,
   LinearScale,
   SelectAllRounded
} from '@material-ui/icons'
import ColorPicker from './color-picker/ColorPicker'
import UndoRedoActionsComponent from './undo-redo-actions/UndoRedoActionsComponent'
import AddImage from './add-image/AddImage'
export default class ScribblePalette extends React.Component {
   state = {
      stroke: 3
   }
   getColor = color => {
      this.props.getColor(color)
   }
   render() {
      console.log('scribble in props', this.props)
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
               <div onClick={() => this.props.sendTool('pan')}>
                  <SelectAllRounded />
               </div>
               {/* <div onClick={() => this.props.sendTool('pan')}>
            <LinearScale />
          </div> */}
            </div>
            <div>
               <input
                  type='range'
                  min={0}
                  max={100}
                  value={this.state.stroke}
                  onChange={e => {
                     this.setState({ stroke: e.target.value }, () =>
                        this.props.getStroke(this.state.stroke)
                     )
                  }}
               />
            </div>
            <div className='color-palette-wrapper'>
               <ColorPicker getColor={this.getColor} />
            </div>
            <div className='color-palette-wrapper'>
               <UndoRedoActionsComponent scribble={this.props.scribble} />
            </div>
            <div className='color-palette-wrapper'>
               <AddImage scribble={this.props.scribble} />
            </div>
         </div>
      )
   }
}
