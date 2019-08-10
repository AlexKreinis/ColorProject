import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/ColorPickerFormStyles.js';

export class ColorPickerForm extends Component {
  state = {
    currentColor: 'teal',
    newColorName: ''
  };

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );

    ValidatorForm.addValidationRule('isColorUnique', value =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }
  updateColor = newColor => {
    this.setState({ currentColor: newColor.hex });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addNewColor = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: '' });
  };

  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentColor } = this.state;

    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateColor}
          className={classes.picker}
        />

        <ValidatorForm onSubmit={this.addNewColor} instantValidate={false}>
          <TextValidator
            placeholder="Color name"
            margin="normal"
            className={classes.colorNameInput}
            value={this.state.newColorName}
            name="newColorName"
            variant="filled"
            onChange={this.handleChange}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'This field is required',
              'Color name is allready taken',
              'This color has allready been used'
            ]}
          />
          <Button
            variant="contained"
            style={{ backgroundColor: paletteIsFull ? 'grey' : currentColor }}
            color="primary"
            type="submit"
            disabled={paletteIsFull}
            className={classes.addColor}
          >
            {paletteIsFull ? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
