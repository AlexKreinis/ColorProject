import React from 'react';
import { withStyles } from '@material-ui/styles';
const styles = {
  box: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px'
  }
};
function DraggableColorBox(props) {
  const { classes } = props;
  return (
    <div className={classes.box} style={{ backgroundColor: props.color }}>
      {props.name}
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
