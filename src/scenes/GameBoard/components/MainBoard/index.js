import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { Board } from './../../../../components/Board';
import { BoardHeader } from './../../../../components/Board/BoardHeader';
import { BoardBody } from './../../../../components/Board/BoardBody';
import Button from './../../../../components/Button';
import ColourItem from './../ColourItem';

const MainBoard = (props) => {
  return (
    <Board>
      <BoardHeader>
        <div>Score: {props.gameBoard.score}</div>
        <div>Time: {props.counter}s</div>
      </BoardHeader>
      <BoardBody>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <ColourItem 
                customColour={props.gameBoard.question.colour}>
                {props.gameBoard.question.name}
              </ColourItem>
            </Col>
            {props.gameBoard.shuffledColours.map((item, key) => {
              return (
                <Col key={key} xs={6}>
                  <Button
                    onClick={props.compareColours(item)}
                    bg={item.colour}>
                    {item.name} 
                  </Button>
                </Col>
              )
            })}
        </Row>
      </Grid>
      </BoardBody>
    </Board>
  )
};

MainBoard.propTypes = {
  counter: PropTypes.number.isRequired,
  compareColours: PropTypes.func.isRequired,
  gameBoard: PropTypes.object.isRequired,
};

export default MainBoard;
  