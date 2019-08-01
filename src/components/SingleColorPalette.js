import React, { Component } from 'react';
import ColorBox from './ColorBox.js';
import '../css/ColorBox.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import { Link } from 'react-router-dom';
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
  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    opacity: '1',
    backgroundColor: 'black',
    position: 'relative',
    '& a': {
      width: '100px',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginLeft: '-50px',
      marginTop: '-15px',
      textAlign: 'center',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      lineHeight: '30px',
      color: 'white',
      textTransform: 'uppercase',
      border: 'none',
      textDecoration: 'none'
    }
  }
};

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
          key={color.name}
          name={color.name}
          background={color[format]}
          showingFullPalette={false}
        />
      );
    });
  };

  changeFormat = value => {
    this.setState({ format: value });
  };

  render() {
    const { paletteName, emoji, id } = this.props.palette;
    const colorBoxes = this.makeColorBoxes();
    const { classes } = this.props;
    return (
      <div className={classes.Palette}>
        <Navbar handleChange={this.changeFormat} showingSlider={false} />
        <div className={classes.paletteColors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>Go back</Link>
          </div>
        </div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(Styles)(SingleColorPalette);
