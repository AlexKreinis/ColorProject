import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';

function DragableColorList() {
  const makeDragableBoxes = () => {
    return this.state.colors.map(color => (
      <DraggableColorBox
        key={color.name}
        color={color.color}
        name={color.name}
        handleClick={this.deletePalette}
      />
    ));
  };
  return <div>ah</div>;
}

export default DragableColorList;
