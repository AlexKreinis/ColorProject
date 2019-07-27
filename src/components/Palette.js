import React, { Component } from 'react';
import ColorBox from './ColorBox.js';
import '../css/Palette.css';
import Navbar from './Navbar.js';
export class Palette extends Component {
  state = {
    level: 500,
    format: 'hex'
  };
  makingColors = () => {
    const { level, format } = this.state;
    return this.props.palette.colors[level].map(color => {
      return <ColorBox background={color[format]} name={color.name} />;
    });
  };
  changeLevel = level => {
    this.setState({ level });
  };
  changeFormat = value => {
    this.setState({ format: value });
  };
  render() {
    const { level } = this.state;
    const colorBoxes = this.makingColors();
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className="Palette-colors"> {colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
