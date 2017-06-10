/* -----------------    ACTIONS     ------------------ */
const ADD_TO_HISTORY = 'ADD_TO_HISTORY';
const CLEAR_HISTORY = 'CLEAR_HISTORY';

/* ------------   ACTION CREATORS     ----------------- */

export const addHistory = (line) => ({
  type: ADD_TO_HISTORY,
  line: line
});

export const clearHistory = () => ({
  type: CLEAR_HISTORY,
});

/* -------------       REDUCER     ------------------- */

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      let newHistory = [...state, action.line];
      let smallerHistory = [];
      if (newHistory.length > 40) {
        smallerHistory = newHistory.slice(newHistory.length - 30);
        return smallerHistory;
      }
      return newHistory;

    case CLEAR_HISTORY:
      return [];

    default:
      return state;
  }
};


export default reducer;
