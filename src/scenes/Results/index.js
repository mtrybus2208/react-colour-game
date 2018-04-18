import React, { Component } from 'react'; 
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import Button from './../../components/Button';
import Container from './../../components/Container'; 

const style = {
  maxWidth: '700px',
  margin: '60px auto',
  padding: '60px',
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
 
class Results extends Component {
  constructor(props) {
    super(props); 
    // this.onChangeQuote = this.onChangeQuote.bind(this);
  }

  // onChangeQuote = (param) => (event) => { 
  //   const { value } = event.target;
  //   this.props.changeQuote(value); 
  // }

  render() {
    return (
      <Container> 
          <Paper  zDepth={1} style={style}>
            <h3 className="quote-heading">Game Over</h3>
            <TextField 
              className="quote-field"
              hintText="Write your quote!"
              multiLine={true}
              fullWidth={true}
              style={textField} />
            <Button> asd
            </Button>
          </Paper> 
      </Container>
    );
  }
}

const mapStateToProps = (state) => { 
  return {
  //  ...state.newQuotesReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // changeQuote: (payload) => {
    //   dispatch(
    //     fromActions.changeQuote(payload)
    //   )
    // },
    // submitQuotesForm: (payload) => {
    //   dispatch(
    //     fromActions.submitQuotesForm(payload)
    //   )
    // },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
 