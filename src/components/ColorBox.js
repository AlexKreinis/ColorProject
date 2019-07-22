import React, { Component } from 'react';
import '../css/ColorBox.css';
export class ColorBox extends Component {
  render() {
    const { name, background } = this.props;
    return (
      <div style={{ background }} className="ColorBox">
        <div className="copy-contrainer">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button"> Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    );
  }
}

export default ColorBox;
