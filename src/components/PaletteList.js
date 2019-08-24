import React, { Component } from 'react';
import MiniPalette from './MiniPalette.js';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteListStyles.js';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

export class PaletteList extends Component {
  state = {
    openDeleteDialog: false,
    deleteId: ''
  };
  openDialog = async id => {
    await this.setState({ openDeleteDialog: true, deleteId: id });
  };
  handleDelete = () => {
    const { deleteId } = this.state;
    this.props.deletePalette(deleteId);
    this.closeDialog();
  };
  closeDialog = () => {
    this.setState({ openDeleteDialog: false, deleteId: '' });
  };
  goToPalette = id => {
    this.props.history.push('/palette/' + id);
  };
  makePalettes = () => {
    const { palettes } = this.props;
    return palettes.map(pal => {
      return (
        <CSSTransition key={pal.id} classNames="fade" timeout={500}>
          <MiniPalette
            key={pal.id}
            openDialog={this.openDialog}
            {...pal}
            handleClick={() => this.goToPalette(pal.id)}
          />
        </CSSTransition>
      );
    });
  };

  render() {
    const palettes = this.makePalettes();
    const { classes } = this.props;
    const { openDeleteDialog } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.title}>React colors</h1>
            <Link to="/palette/new">Create Palette </Link>
          </nav>

          <TransitionGroup className={classes.palettes}>
            {palettes}
          </TransitionGroup>
        </div>
        <Dialog open={openDeleteDialog} onClose={this.closeDialog}>
          <DialogTitle id="delete-dialog-title">
            Delete this palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Delete</ListItemText>
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Cancel</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
