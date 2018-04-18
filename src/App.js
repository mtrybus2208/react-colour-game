import React, { Component } from 'react';
import Header from './components/Header/';
import {
  Route,
  Link
} from 'react-router-dom'; 
import { ConnectedRouter as Router } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import QuotesScene from './scenes/Quotes/';
import GameBoard from './scenes/GameBoard/';
import NewQuotes from './scenes/NewQuotes/';
import Results from './scenes/Results/';


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MuiThemeProvider>
        <Router history={this.props.history}>
          <div>
            <Header />
            <Route exact path="/" component={QuotesScene} />
            <Route exact path="/new-quote" component={NewQuotes} />
            <Route exact path="/game-board" component={GameBoard} />
            <Route exact path="/results" component={Results} />
          </div> 
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
