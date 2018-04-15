import React, { Component } from 'react'; 
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux'; 
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Button from './../../components/Button';
import ColourItem from './components/ColourItem';
import Container from './../../components/Container';
import * as fromActions from './actions'; 

const style = {
  maxWidth: '700px',
  margin: '60px auto',
  backgroundColor: 'rgba(255, 255, 255, 0.5)'
}
const style1 = {
  color: '#000',
}
const textField = { 
  margin: '40px auto',
}

const myState = {
  colorName: 'black',
  bg: '#000',
  color: 'pink'
}
 
class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: [],
      shuffled: []
    };  
  }

  componentDidMount() {
    const base = [...this.props.base];  
    this.props.shuffleColours(base, false);
  }
 
  render() {
    return (
      <Container>  
          <Paper  zDepth={1} style={style}>
              <div style={{padding: '60px'}}>
                <Grid fluid>
                  <Row>
                    <Col xs={12}>
                      <ColourItem customColour={this.props.question.colour}>
                        {this.props.question.name}
                      </ColourItem>
                    </Col>
                    {this.props.base.map((item, key) => {
                      return (
                        <Col key={key} xs={6}>
                          <Button style={{backgroundColor: item.colour}}>
                            {item.name} 
                          </Button>
                        </Col>
                      )
                    })}
                  </Row>
                </Grid>
              </div>
          </Paper> 
      </Container>
    );
  }
}

const mapStateToProps = ({gameBoardReducer}) => { 
  return {
    base: gameBoardReducer.base,
    question: gameBoardReducer.question
  }
}

const mapDispatchToProps = dispatch => {
  return {
    shuffleColours: (payload) => {
      dispatch(
        fromActions.shuffleColours(payload)
      )
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
 