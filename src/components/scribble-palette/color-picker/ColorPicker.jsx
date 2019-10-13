import React from 'react'
import { GithubPicker, GithubPickerProps } from 'react-color'

export default class ColorPicker extends React.Component {
  handleChangeComplete = (color, event) => {
    this.props.getColor(color.hex)
  }

  render () {
    return (
      <div>
        <GithubPicker
          onChangeComplete={this.handleChangeComplete}
          {...GithubPickerProps}
        />
      </div>
    )
  }
}
