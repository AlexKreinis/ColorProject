import React, { Component } from 'react';
import Palette from './components/Palette.js';
import seedColors from './defaultColors/seedColors.js';
import PaletteList from './components/PaletteList.js';
import SingleColorPalette from './components/SingleColorPalette';
import NewPaletteForm from './components/NewPaletteForm.js';
import { generatePalette } from './defaultColors/colorHelpers.js';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  static defaultProps = {
    initStorage: JSON.parse(localStorage.getItem('palettes'))
  };

  state = {
    palettes: this.props.initStorage || seedColors
  };
  findPalette = id => {
    return this.state.palettes.find(palette => {
      return palette.id === id;
    });
  };
  savePalette = async newPalette => {
    await this.setState(st => ({
      palettes: [...st.palettes, newPalette]
    }));
    this.syncLocalStorage();
  };
  syncLocalStorage = () => {
    window.localStorage.setItem(
      'palettes',
      JSON.stringify(this.state.palettes)
    );
  };
  deletePalette = async id => {
    await this.setState(st => ({
      palettes: st.palettes.filter(palette => palette.id !== id)
    }));
    this.syncLocalStorage();
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
            <PaletteList
              palettes={this.state.palettes}
              {...routeProps}
              deletePalette={this.deletePalette}
            />
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
        <Route
          render={routeProps => (
            <PaletteList
              palettes={this.state.palettes}
              {...routeProps}
              deletePalette={this.deletePalette}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
