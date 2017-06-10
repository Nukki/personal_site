const INITIAL_STATE = 'white';

/* -----------------    ACTIONS     ------------------ */
const SET_COLOR = 'SET_COLOR';
const RESET_COLOR = 'RESET_COLOR';

/* ------------   ACTION CREATORS     ----------------- */

export const setTyperColor = (color) => ({
  type: SET_COLOR,
  color: color
});

export const resetTyperColor = () => ({
  type: RESET_COLOR,

});


/* -------------       REDUCER     ------------------- */

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_COLOR:
      return action.color;
    case RESET_COLOR:
      return INITIAL_STATE;
    default:
      return state;
  }
};


export default reducer;
