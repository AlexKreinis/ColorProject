import React from 'react';
import { withStyles } from '@material-ui/styles';
import Styles from '../styles/MiniPaletteStyles.js';
import DeleteIcon from '@material-ui/icons/Delete';

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
  const handleDelete = event => {
    console.log('handle delete!');
    const { id } = props;
    event.stopPropagation();
    props.openDialog(id);
  };

  const { classes, paletteName, emoji } = props;
  const miniColorBoxes = makeMiniPalettes();
  return (
    <div className={classes.root} onClick={props.handleClick}>
      <DeleteIcon
        style={{ transition: 'all 0.3s ease-in-out ' }}
        className={classes.deleteIcon}
        onClick={handleDelete}
      />

      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}
export default withStyles(Styles)(MiniPalette);
