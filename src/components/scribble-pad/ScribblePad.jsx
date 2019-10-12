import React from "react";
import { SketchField, Tools } from "react-sketch";
export default class ScribblePad extends React.Component {
  render() {
    return (
      <SketchField
        width="1024px"
        height="768px"
        tool={Tools.Pencil}
        lineColor="black"
        lineWidth={3}
      />
    );
  }
}
