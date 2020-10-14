// Reducer function is similar to the ones used on Redux

const notesReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_NOTES":
      return action.notes;
    case "ADD_NOTE":
      return [...state, action.note];
    case "REMOVE_NOTE":
      return state.filter(({ title }) => title !== action.title);
    default:
      return state;
  }
};

export { notesReducer as default };
