import React, { Component } from 'react';
import './App.css';
import Palette from './components/Palette.js';
import seedColors from './defaultColors/seedColors.js';
import PaletteList from './components/PaletteList.js';
import SingleColorPalette from './components/SingleColorPalette';
import NewPaletteForm from './components/NewPaletteForm.js';
import { generatePalette } from './defaultColors/colorHelpers.js';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    palettes: seedColors
  };
  findPalette = id => {
    return this.state.palettes.find(palette => {
      return palette.id === id;
    });
  };
  savePalette = newPalette => {
    this.setState(st => ({
      palettes: [...st.palettes, newPalette]
    }));
  };
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={routeProps => (
            <NewPaletteForm
              savePalette={this.savePalette}
              {...routeProps}
              palettes={this.state.palettes}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList palettes={this.state.palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
        } />
      </Switch>
    );
  }
}

export default App;
