import React from 'react'
import { IoIosUndo, IoIosRedo } from 'react-icons/io'
import './UndoRedoActionsComponent.css'
import { MdClearAll } from 'react-icons/md'
export default class UndoRedoActionsComponent extends React.Component {
  render () {
    return (
      <div>
        <div className='actions-wrapper'>
          <IoIosUndo
            className='action-undo'
            onClick={() =>
              this.props.scribble.canUndo() && this.props.scribble.undo()
            }
          />
          <IoIosRedo
            className='action-redo'
            onClick={() =>
              this.props.scribble.canRedo() && this.props.scribble.redo()
            }
          />
          <MdClearAll
            className='action-redo'
            onClick={() => this.props.scribble.clear()}
          />
        </div>
      </div>
    )
  }
}
