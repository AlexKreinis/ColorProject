import React, { Component } from 'react';
import ColorBox from './ColorBox.js';
import '../css/Palette.css';
import Navbar from './Navbar.js';
export class Palette extends Component {
  state = {
    level: 500
  };
  makingColors = () => {
    const { level } = this.state;
    return this.props.palette.colors[level].map(color => {
      return <ColorBox background={color.hex} name={color.name} />;
    });
  };
  changeLevel = level => {
    this.setState({ level });
  };
  render() {
    const { level } = this.state;
    const colorBoxes = this.makingColors();
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className="Palette-colors"> {colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
