import React, { Component } from 'react';
import ColorBox from './ColorBox.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Styles from '../styles/PaletteStyles.js';

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
