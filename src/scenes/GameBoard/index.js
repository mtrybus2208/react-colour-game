import React, { Component } from 'react'; 
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux'; 
import { Grid, Row, Col } from 'react-flexbox-grid';

import Button from './../../components/Button';
import { Board, BoardHeader, BoardBody } from './components/Board';
import ColourItem from './components/ColourItem';
import Container from './../../components/Container';
import * as fromActions from './actions'; 
 
class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.compareColours = this.compareColours.bind(this); 
  }

  componentDidMount() {
    const base = [...this.props.base];  
    this.props.shuffleColours(base, false);
  }
 
  compareColours = (answer) => (event) => { 
    const payload = {
      question: this.props.question,
      answer,
      base: this.props.base
    } 
    this.props.compareColours(payload);
  }
 
  render() {
    return (
      <Container> 
              <Board>
                <BoardHeader>
                  <div>Score: {this.props.score}</div>
                  <div>Time: {this.props.timer}s</div>
                </BoardHeader>
                <BoardBody>
                  <Grid fluid>
                    <Row>
                      <Col xs={12}>
                        <ColourItem customColour={this.props.question.colour}>
                          {this.props.question.name}
                        </ColourItem>
                      </Col>
                      {this.props.shuffledColours.map((item, key) => {
                        return (
                          <Col key={key} xs={6}>
                          <Button
                            onClick={this.compareColours(item)}
                            style={{backgroundColor: item.colour}}>
                            {item.name} 
                          </Button>
                      </Col>
                      )
                    })}
                  </Row>
                </Grid>
                </BoardBody>
              </Board>
 
      </Container>
    );
  }
}

const mapStateToProps = ({gameBoardReducer}) => { 
  return {
    base: gameBoardReducer.base,
    shuffledColours: gameBoardReducer.shuffledColours,
    question: gameBoardReducer.question,
    score: gameBoardReducer.score,
    timer: gameBoardReducer.timer,
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
 