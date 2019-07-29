import React, { Component } from 'react';
import ColorBox from './ColorBox.js';
import '../css/ColorBox.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

export class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex' };
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
  }

  gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  };

  makeColorBoxes = () => {
    const { format } = this.state;
    return this._shades.map(color => {
      return (
        <ColorBox
          key={color.id}
          name={color.name}
          background={color[format]}
          showLink={false}
        />
      );
    });
  };

  changeFormat = value => {
    this.setState({ format: value });
  };

  render() {
    const { paletteName, emoji } = this.props.palette;
    const colorBoxes = this.makeColorBoxes();
    console.log(paletteName);
    return (
      <div className="Palette">
        <Navbar handleChange={this.changeFormat} showingSlider={false} />
        <div className="Palette-colors">{colorBoxes}</div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
