import React, { PropTypes } from 'react';

import Quote from './Quote';
import './index.css';

 

const Quotes = ({quotes}) => {
  
  return (
    <div className="quotes-grid">
      {quotes.map((item, index) => {
        return <Quote content={item} />
      })} 
    </div>
  )
};  
export default Quotes;
  