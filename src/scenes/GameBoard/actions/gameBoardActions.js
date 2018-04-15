import * as actionTypes from './actionTypes';


export const changeQuote = (payload) => ({
  type: actionTypes.CHANGE_QUOTE,
  payload,
});

export const submitQuotesForm = (payload) => ({
  type: actionTypes.SUBMIT_QUOTES_FORM,
  payload,
});

export const shuffleColours = (baseColours, difficulty) => {
  return (dispatch, getState) => { 
    const base = [...baseColours];  
    
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
        const payload = {
          question,
          shuffled
        }
       return dispatch(shuffleColoursSuccess(payload));
  }
};

export const shuffleColoursSuccess = (payload) => ({
  type: actionTypes.SHUFFLE_COLOURS_SUCCESS,
  payload,
});

// Compare Colours
export const compareColours = ({answer, question, base}) => {
  return (dispatch, getState) => {  
    const result = base.find((element) => {
      return element.colour === question.colour;
    });
    if(result.name === answer.name) {
      return dispatch(updateResult());
    }
  }
};

export const compareColoursSuccess = () => ({
  type: actionTypes.COMPARE_COLOURS_SUCCESS,
});

export const compareColoursFail = () => ({
  type: actionTypes.COMPARE_COLOURS_FAIL,
});

export const updateResult = () => ({
  type: actionTypes.UPDATE_RESULT,
});
