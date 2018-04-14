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
    this.colourShuffle = this.colourShuffle.bind(this); 
    this.state = {
      question: [],
      shuffled: []
    };  
  }

  componentDidMount() {
    this.colourShuffle();
  }
  
  colourShuffle() {
    const base = [...this.props.gameBoardReducer.base];  
 
    const names = base.map(item => ({name: item.name}))
      .sort(() => (.5 - Math.random()));

    const colors = base.map((item, index) => ({colour: item.colour}))
      .sort(() => (.5 - Math.random()));

    const question =  {
        ...names[Math.floor(Math.random() * base.length)], 
        ...colors[Math.floor(Math.random() * base.length)], 
    };
 
    const shuffled = colors.map((colour, index) => {
      return {
        ...colour,
        name: names[index].name
      }
    });  

    this.setState({
      question,
      shuffled,
    }); 
    
  }
 
  render() {
    console.log()
    return (
      <Container>  
          <Paper  zDepth={1} style={style}>
              <div style={{padding: '60px'}}>
                <Grid fluid>
                  <Row>
                    <Col xs={12}>
                      <ColourItem customColour={this.state.question.colour}>
                        {this.state.question.name}
                      </ColourItem>
                    </Col>
                    {this.state.shuffled.map((item, key) => {
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

const mapStateToProps = (state) => { 
  return {
    gameBoardReducer: state.gameBoardReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeQuote: (payload) => {
      dispatch(
        fromActions.changeQuote(payload)
      )
    },
    submitQuotesForm: (payload) => {
      dispatch(
        fromActions.submitQuotesForm(payload)
      )
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
 