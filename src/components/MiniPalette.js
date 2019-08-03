import React from 'react';
import { withStyles } from '@material-ui/styles';
import Styles from '../styles/MiniPaletteStyles.js';

function MiniPalette(props) {
  const makeMiniPalettes = () => {
    const { colors, classes } = props;
    return colors.map(color => {
      return (
        <div
          className={classes.miniColor}
          style={{ backgroundColor: color.color }}
          key={color.name}
        />
      );
    });
  };

  const { classes, paletteName, emoji } = props;
  const miniColorBoxes = makeMiniPalettes();
  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}
export default withStyles(Styles)(MiniPalette);
