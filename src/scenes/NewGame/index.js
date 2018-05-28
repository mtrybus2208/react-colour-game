import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import styled from 'styled-components';

import Button from './../../components/Button';
import Container from './../../components/Container';
import { Board } from './../../components/Board';
import { H2, Par } from './../../components/Typography';
import * as fromActions from './actions';

const Info = styled.div`
  margin: 30px 0 20px 0;
  border-top: 1px solid #eee;
`

class NewGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 2,
      difficulty: 3,
    };

    this.startGame = this.startGame.bind(this);   
    this.setGameSettings = this.setGameSettings.bind(this);
  }

  startGame = () => (event) => {
    // this.props.startGame({});
    event.preventDefault();
    console.log(`submit`);
    console.log({
      timer: this.state.timer,
      difficulty: this.state.difficulty,
    });
  }

  setGameSettings = (type) => (event, index, value) => {
    this.setState({
      [type]: value
    });
  }
 

  render() {
    return (
      <Container> 
        <Board padding={'medium'}>
          <H2>New Game!</H2>
            <Info>
              <Par>
                Celem gry jest wprowadzenie umysłu w stan UPTIME, czyli zwiększonej koncentracji.Doskonały sposób na szybszą naukę.
              </Par>
              <Par>
                Jak grać?  Wyświetlony zostanie kolorowy wyraz. Poniżej wyświetlone zostaną nazwy kolorów. Kliknij myszką na nazwę koloru, w jakim napisany jest wyraz.
              </Par>
            </Info>
            <form onSubmit={this.startGame()}>
              <SelectField
                onChange={this.setGameSettings(`timer`)}
                fullWidth
                floatingLabelText="Time"
                value={this.state.timer}>
                <MenuItem value={1} primaryText="30s" />
                <MenuItem value={2} primaryText="60s" />
                <MenuItem value={3} primaryText="90s" />
              </SelectField>

              <SelectField
                onChange={this.setGameSettings(`difficulty`)}
                fullWidth
                floatingLabelText="Difficulty"
                value={this.state.difficulty}>
                <MenuItem value={1} primaryText="easy" />
                <MenuItem value={2} primaryText="medium" />
                <MenuItem value={3} primaryText="hard" />
              </SelectField>
            <Button type="submit">
              Play
            </Button>
          </form>
        </Board>
      </Container>
    );
  }
}

const mapStateToProps = (state) => { 
  return { 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: (payload) => {
      dispatch(
        fromActions.startGame(payload)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewGame); 