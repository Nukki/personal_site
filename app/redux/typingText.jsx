const INITIAL_STATE = ["Hello! Type \'help\' for a list of available commands" ];

/* -----------------    ACTIONS     ------------------ */
const SET_TEXT = 'SET_TEXT';
const RESET_TEXT = 'RESET_TEXT';

/* ------------   ACTION CREATORS     ----------------- */

export const setTyper = (text) => ({
  type: SET_TEXT,
  text: text
});

export const resetTyper = () => ({
  type: RESET_TEXT,
});

/* -------------       REDUCER     ------------------- */

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TEXT:
      return action.text;
    case RESET_TEXT:
      return INITIAL_STATE;
    default:
      return state;
  }
};


export default reducer;
