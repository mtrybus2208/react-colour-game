import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import Button from './../../components/Button';
import Container from './../../components/Container';
import { Board } from './../../components/Board';
import { H2, Par } from './../../components/Typography';
import * as fromActions from './actions';

const Info = styled.div`
  margin: 30px 0 20px 0;
  border-top: 1px solid #eee;
`;

const StyledFormControl = styled(FormControl)`
  && {
    width: 100%;
    margin: 15px 0;
  }
`;

const propTypes = {
  startGame: PropTypes.func.isRequired,
};
class NewGame extends Component {

  state = {
    timer: 30,
    difficulty: 3,
  };

  setGameSettings = (type) => (event) => {
    this.setState({
      [type]: event.target.value,
    });
  }

  startGame = () => (event) => {
    event.preventDefault();

    const formData = {
      timer: this.state.timer,
      difficulty: this.state.difficulty,
    };

    this.props.startGame(formData);
  }

  render() {
    return (
      <Container>

        <Board padding="medium">
          <H2>New Game!</H2>
          <Info>
            <Par>
              The aim of the game is to increase Your concentration.
              When you are focused, learning process goes much faster.
              Best time to play this game is before your learning session.
            </Par>
            <Par>
              How to play? Click the name of colour that describes a color of a question.
              Ignore the background colors of the answers.
            </Par>
          </Info>
          <form onSubmit={this.startGame()}>
            <StyledFormControl>
              <InputLabel htmlFor="time">Time</InputLabel>
              <Select
                onChange={this.setGameSettings('timer')}
                fullWidth
                inputProps={{
                  name: 'time',
                  id: 'time',
                }}
                value={this.state.timer}
              >
                <MenuItem value={30}>30s</MenuItem>
                <MenuItem value={60}>60s</MenuItem>
                <MenuItem value={90}>90s</MenuItem>
              </Select>
            </StyledFormControl>
       
            <StyledFormControl>
              <InputLabel htmlFor="difficulty">Difficulty</InputLabel>
              <Select
                onChange={this.setGameSettings('difficulty')}
                fullWidth
                value={this.state.difficulty}
                inputProps={{
                  name: 'difficulty',
                  id: 'difficulty',
                }}
              >
                <MenuItem value={1}>easy</MenuItem>
                <MenuItem value={2}>medium</MenuItem>
                <MenuItem value={3}>hard</MenuItem>
              </Select>
            </StyledFormControl>
            <Button type="submit">
              Play
            </Button>
          </form>
        </Board>
      </Container>
    );
  }
}

const mapStateToProps = () => {
  return { }
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: (payload) => {
      dispatch(
        fromActions.startGame(payload),
      )
    },
  };
};

NewGame.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(NewGame);
