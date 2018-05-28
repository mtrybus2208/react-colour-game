import React, { Component } from 'react';
import Header from './components/Header/';
import { Route } from 'react-router-dom'; 
import { ConnectedRouter as Router } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ThemeProvider } from 'styled-components';

import GameBoard from './scenes/GameBoard/';
import NewGame from './scenes/NewGame/';
import Results from './scenes/Results/';
import theme from './theme';
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MuiThemeProvider>
            <Router history={this.props.history}>
              <div>
                <Header />
                <Route exact path="/" component={NewGame} />
                <Route exact path="/game-board" component={GameBoard} />
                <Route exact path="/results" component={Results} />
              </div>
            </Router>
        </MuiThemeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
