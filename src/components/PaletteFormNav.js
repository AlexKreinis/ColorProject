import React, { Component } from 'react';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PaletteDialogForm from './PaletteDialogForm.js';
import styles from '../styles/PaletteFormNavStyles.js';

export class PaletteFormNav extends Component {
  state = {
    formShowing: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  savePalette = palette => {
    this.props.savePalette(palette);
  };
  showForm = () => {
    this.setState({ formShowing: true });
  };
  hideForm = () => {
    this.setState({ formShowing: false });
  };
  render() {
    const { open, classes, handleDrawerOpen, palettes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color="default"
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Make a new Palette
            </Typography>
          </Toolbar>
          <div className={classes.navButtons}>
            <Link to="/">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Go Back
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              onClick={this.showForm}
              className={classes.button}
            >
              Save
            </Button>
          </div>
        </AppBar>
        {this.state.formShowing && (
          <PaletteDialogForm
            palettes={palettes}
            savePalette={this.savePalette}
            hideForm={this.hideForm}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
