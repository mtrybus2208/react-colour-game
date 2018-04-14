import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';

import './index.css';

const Quote = ({content}) => {
  
  return (
    <div className="quote">{content}</div>
  )
};  
export default Quote;
 