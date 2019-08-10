import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

export class PaletteDialogForm extends Component {
  state = {
    stage: 'form',
    newPaletteName: ''
  };

  componentDidMount() {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.hideForm();
  };
  savePalette = newEmoji => {
    const { newPaletteName } = this.state;
    const palette = { name: newPaletteName, emoji: newEmoji.native };
    this.props.savePalette(palette);
    this.setState({ stage: '' });
  };
  handleSubmit = () => {
    this.setState({ stage: 'emoji' });
  };
  checkIfForm = () => {
    const { stage } = this.state;
    return stage === 'form';
  };
  checkIfEmoji = () => {
    const { stage } = this.state;
    return stage === 'emoji';
  };
  render() {
    const { newPaletteName } = this.state;
    return (
      <div>
        <Dialog open={this.checkIfEmoji()} onClose={this.handleClose}>
          <DialogTitle id="form-dialog-title">
            Choose a palette Emoji
          </DialogTitle>
          <Picker title="Pick a Palette Emoji" onSelect={this.savePalette} />
        </Dialog>
        <Dialog
          open={this.checkIfForm()}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Choose palette name</DialogTitle>
          <ValidatorForm onSubmit={this.handleSubmit}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your palette,make sure its unique!
              </DialogContentText>
              <TextValidator
                name="newPaletteName"
                value={newPaletteName}
                label="Palette Name"
                onChange={this.handleChange}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={['enter palette name', 'Name allready taken']}
                fullWidth
                margin="normal"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteDialogForm;
