import React from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

class Slider extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         value: { min: 0, max: 1 }
      }
   }
   render() {
      return (
         <InputRange
            maxValue={isNaN(this.props.max) ? 1 : this.props.max}
            minValue={0}
            value={this.state.value}
            onChange={value =>
               this.setState({ value }, () =>
                  this.props.sendTimeToParent(value)
               )
            }
         />
      )
   }
}

export default Slider
