import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';
import styles from '../styles/DraggableColorBoxStyles.js';

const DraggableColorBox = SortableElement(props => {
  const removeColor = e => {
    props.handleClick(props.name);
  };
  const { classes, name } = props;
  return (
    <div className={classes.box} style={{ backgroundColor: props.color }}>
      <div className={classes.boxContent}>
        <span> {name}</span>
        <span>
          <DeleteIcon className={classes.deleteIcon} onClick={removeColor} />
        </span>
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);
