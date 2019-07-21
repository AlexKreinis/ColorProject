import React, { Component } from 'react';
import ColorBox from './ColorBox.js';
import '../css/Palette.css';

export class Palette extends Component {
  makingColors = () => {
    return this.props.colors.map(color => {
      return <ColorBox background={color.color} name={color.name} />;
    });
  };
  render() {
    const colorBoxes = this.makingColors();
    return (
      <div className="Palette">
        <div className="Palette-colors"> {colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
