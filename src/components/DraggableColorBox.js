import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";

const styles = {
  box: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4.5px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.3)"
    }
  },
  boxContent: {
    position: "absolute",
    padding: "10px",
    width: "100%",
    left: "0px",
    bottom: "0px",
    color: "rgba(0,0,0,0.6)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between"
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out"
  }
};

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
