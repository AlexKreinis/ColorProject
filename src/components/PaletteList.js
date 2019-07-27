import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class PaletteList extends Component {
  makePalettes = () => {
    const { palettes } = this.props;
    return palettes.map(pal => {
      return (
        <p>
          <Link to={`/palette/${pal.id}`}>{pal.paletteName} </Link>;
        </p>
      );
    });
  };
  render() {
    const palettes = this.makePalettes();
    return (
      <div>
        <h1>React Colors</h1>
        {palettes}
      </div>
    );
  }
}

export default PaletteList;
