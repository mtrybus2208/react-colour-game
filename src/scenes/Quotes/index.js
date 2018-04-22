import React, { Component } from 'react'; 
import { connect } from 'react-redux';   
import RaisedButton from 'material-ui/RaisedButton';

import Quotes from './../../components/Quotes';
import * as fromActions from './actions';
import './styles.css';
 
class QuotesScene extends Component {
  constructor(props) {
    super(props);  
    this.loggerHandler = this.loggerHandler.bind(this);
    this.onGetQuotes = this.onGetQuotes.bind(this);
  }

 
  loggerHandler = (param) => (e) => { 
    this.props.loggerTest(param); 
  }

  onGetQuotes() {
    this.props.getQuotes(); 
  }

  render() {
    return (
      <div>
        <Quotes quotes={this.props.quotesReducer.content} />
        <RaisedButton label="Default"   onClick={this.loggerHandler('test')} /> 
        <RaisedButton label="Get Quotes" onClick={this.onGetQuotes} /> 
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loggerTest: (payload) => {
      dispatch(
        fromActions.loggerTest(payload)
      )
    },
    getQuotes: () => {
      dispatch(
        fromActions.getQuotes()
      )
    }
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(QuotesScene);