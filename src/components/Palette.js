import React, { Component } from 'react';
import ColorBox from './ColorBox.js';
import '../css/Palette.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import { withStyles } from '@material-ui/styles';

const Styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  paletteColors: {
    height: '90%'
  },
  paletteFooter: {
    backgroundColor: 'white',
    height: '5vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  emoji: {
    fontSize: '1.5rem',
    margin: '0 1rem'
  }
};

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
          showingFullPalette={true}
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
    const { classes } = this.props;
    const { paletteName, emoji } = this.props.palette;
    const colorBoxes = this.makingColors();
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingSlider={true}
        />
        <div className={classes.paletteColors}> {colorBoxes}</div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(Styles)(Palette);
