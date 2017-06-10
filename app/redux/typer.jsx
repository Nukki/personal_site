/* -----------------    ACTIONS     ------------------ */
const TYPING_UPDATE = 'TYPING_UPDATE';
const RESET_TYPING = 'RESET_TYPING';

/* ------------   ACTION CREATORS     ----------------- */

export const typingUpdate = () => ({
  type: TYPING_UPDATE,
});

export const resetTyping = () => ({
  type: RESET_TYPING,
});


/* -------------       REDUCER     ------------------- */

const reducer = (state = null, action) => {
  switch (action.type) {
    case TYPING_UPDATE:
      return "done";
    case RESET_TYPING:
      return null;

    default:
      return state;
  }
};


export default reducer;
