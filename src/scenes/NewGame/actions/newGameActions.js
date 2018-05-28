import * as actionTypes from './actionTypes';
import { push } from 'react-router-redux';  

export const setGameParams = (payload) => {
  return {
    type: actionTypes.SET_GAME_PARAMS,
    payload
  }
};
 
export const startGame = (payload) => {
  return (dispatch) => {  
    dispatch(setGameParams(payload));
    dispatch(push('/game-board'));
  }
};
 