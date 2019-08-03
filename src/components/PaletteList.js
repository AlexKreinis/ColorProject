import React, { Component } from 'react';
import MiniPalette from './MiniPalette.js';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteListStyles.js';
import { Link } from 'react-router-dom';

export class PaletteList extends Component {
  goToPalette = id => {
    this.props.history.push('/palette/' + id);
  };
  makePalettes = () => {
    const { palettes } = this.props;
    return palettes.map(pal => {
      return (
        <MiniPalette {...pal} handleClick={() => this.goToPalette(pal.id)} />
      );
    });
  };

  render() {
    const palettes = this.makePalettes();
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React colors</h1>
            <Link to="/palette/new">Create Palette </Link>
          </nav>
          <div className={classes.palettes}>{palettes}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
