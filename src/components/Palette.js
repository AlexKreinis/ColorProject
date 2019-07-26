import React, { Component } from 'react';
import ColorBox from './ColorBox.js';
import '../css/Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
    const colorBoxes = this.makingColors();
    return (
      <div className="Palette">
        <div className="slider">
          <Slider
            defaultValue={this.state.level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
          />
        </div>
        <div className="Palette-colors"> {colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
