import React, { Component } from 'react';
import ColorBox from './ColorBox.js';
import '../css/Palette.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

export class Palette extends Component {
  state = {
    level: 500,
    format: 'hex'
  };
  makingColors = () => {
    const { level, format } = this.state;
    const { id } = this.props.palette;
    return this.props.palette.colors[level].map(color => {
      return (
        <ColorBox
          background={color[format]}
          name={color.name}
          key={color.id}
          id={color.id}
          paletteId={id}
          showLink={true}
        />
      );
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
    const { paletteName, emoji } = this.props.palette;
    const colorBoxes = this.makingColors();
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingSlider={true}
        />
        <div className="Palette-colors"> {colorBoxes}</div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default Palette;
