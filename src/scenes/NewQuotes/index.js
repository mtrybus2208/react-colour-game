import React, { Component } from 'react'; 
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import Container from './../../components/Container';
import * as fromActions from './actions';
import './styles.css';

const style = {
  maxWidth: '700px',
  margin: '60px auto',
  padding: '60px',
}
const style1 = {
  color: '#000',
  backgroundColor: 'red'
}
const style3 = {
  color: '#000',
  backgroundColor: 'pink'
}
const textField = { 
  margin: '40px auto',
}
 
class NewQuotes extends Component {
  constructor(props) {
    super(props); 
    this.onChangeQuote = this.onChangeQuote.bind(this);
  }

  onChangeQuote = (param) => (event) => { 
    const { value } = event.target;
    this.props.changeQuote(value); 
  }

  render() {
    return (
      <Container> 
          <Paper  zDepth={1} style={style}>
            <h3 className="quote-heading">Write Your quote!</h3>
            <TextField
              value={this.props.newQuotes.value} 
              className="quote-field"
              hintText="Write your quote!"
              multiLine={true}
              fullWidth={true}
              style={textField}
              onChange={this.onChangeQuote()}/>
            <RaisedButton label="Send"  fullWidth={true} />
            <RaisedButton label="Send"  rippleStyle={style3} fullWidth={true} overlayStyle={style1} />
          </Paper> 
      </Container>
    );
  }
}

const mapStateToProps = (state) => { 
  return {
    ...state.newQuotesReducer
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

export default connect(mapStateToProps, mapDispatchToProps)(NewQuotes);
 