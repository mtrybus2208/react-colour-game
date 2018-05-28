import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MainBoard from './components/MainBoard'; 
import Container from './../../components/Container';
import * as fromActions from './actions'; 
 
class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      counter: this.props.newGame.timer, 
    };
    this.compareColours = this.compareColours.bind(this); 
    this.timerTick = this.timerTick.bind(this); 
  }

  componentDidMount() {
    const base = [...this.props.gameBoard.base];  
    this.props.shuffleColours(base, false);

    let timer = setInterval(this.timerTick, 1000);
    this.setState({timer});
    console.log(`this.props`);
    console.log(this.props);
  }
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  timerTick() {
      if(this.state.counter === 1){
        clearInterval(this.state.timer);
        this.props.showResults('5');
      } else {
        this.setState({ counter: this.state.counter - 1 });
      }
  }
 
  compareColours = (answer) => (event) => {
    const payload = {
      question: this.props.gameBoard.question,
      answer,
      base: this.props.gameBoard.base
    } 
    this.props.compareColours(payload);
  }
 
  render() {
    return (
      <Container> 
        <MainBoard
          counter={this.state.counter}
          compareColours={this.compareColours}
          gameBoard={this.props.gameBoard}>
        </MainBoard>
      </Container>
    );
  }
}

GameBoard.propTypes = {
  gameBoard: PropTypes.object.isRequired,
  shuffleColours: PropTypes.func.isRequired,
  compareColours: PropTypes.func.isRequired,
  showResults: PropTypes.func.isRequired,
};

const mapStateToProps = ({gameBoard, newGame}) => { 
  return { 
    gameBoard,
    newGame,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    shuffleColours: (payload) => {
      dispatch(
        fromActions.shuffleColours(payload)
      )
    },
    compareColours: (payload) => {
      dispatch(
        fromActions.compareColours(payload)
      )
    },
    showResults: (payload) => {
      dispatch(
        fromActions.showResults(payload)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
 