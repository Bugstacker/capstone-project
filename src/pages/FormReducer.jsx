export const INITIAL_STATE = {
  date: "",
  time: "",
  guests: 1,
  occasion: ""
}

export const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FORM":
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state
  }
}