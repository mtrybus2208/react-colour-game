import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { Board, BoardHeader, BoardBody } from './../../../../components/Board';
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
              <ColourItem customColour={props.gameBoard.question.colour}>
                {props.gameBoard.question.name}
              </ColourItem>
            </Col>
            {props.gameBoard.shuffledColours.map((item, key) => {
              return (
                <Col key={key} xs={6}>
                  <Button
                    onClick={props.compareColours(item)}
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
  )
};  
export default MainBoard;
  