import React from 'react';
import { withStyles } from '@material-ui/styles';
import Styles from '../styles/FooterStyles.js';

function Footer(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(Styles)(Footer);
