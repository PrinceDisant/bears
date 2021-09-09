function reducer(state, action) {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case "counter/increment":
      return { ...state, value: state.value + 1 };
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state;
  }
}

export default reducer;
