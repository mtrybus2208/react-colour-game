import React, { Component } from 'react';
import Header from './components/Header/';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import QuotesScene from './scenes/Quotes/';
import GameBoard from './scenes/GameBoard/';
import NewQuotes from './scenes/NewQuotes/';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={QuotesScene} />
            <Route exact path="/new-quote" component={NewQuotes} />
            <Route exact path="/game-board" component={GameBoard} />
          </div> 
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
