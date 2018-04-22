//import * as actionTypes from './actionTypes';
import { push } from 'react-router-redux'; 
import { resetResult } from './../../GameBoard/actions'; 

export const startGame = (payload) => {
  return (dispatch) => {  
    dispatch(resetResult());
    dispatch(push('/game-board'));
  }
};
 