import React, { Component } from 'react';
import { Route } from 'react-router-dom'; 
import { ConnectedRouter as Router } from 'react-router-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header/';
import GameBoard from './scenes/GameBoard/';
import NewGame from './scenes/NewGame/';
import Results from './scenes/Results/';
import theme from './theme';

const muiTheme = createMuiTheme();
class App extends Component {

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={muiTheme}>
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
      </React.Fragment>
    );
  }
}

export default App;
