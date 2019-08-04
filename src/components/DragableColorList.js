import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";

const DragableColorList = SortableContainer(props => {
  const makeDragableBoxes = () => {
    return props.colors.map((color, index) => (
      <DraggableColorBox
        index={index}
        key={color.name}
        color={color.color}
        name={color.name}
        handleClick={props.removeColor}
      />
    ));
  };
  const DragableBoxes = makeDragableBoxes();
  return <div style={{ height: "100%" }}>{DragableBoxes}</div>;
});

export default DragableColorList;
