export const reducer = (state, action) => {
  switch (action.type) {
    case "isLoading":
      return { ...state, isLoading: action.payload };
    case "setData":
      return { ...state, data: action.payload };
    case "isEditing":
      return { ...state, isEditing: action.payload };
    case "isSearching":
      return { ...state, isSearching: action.payload };
    case "err":
      return { ...state, err: action.payload };
    case "errMessage":
      return { ...state, errMessage: action.payload };
    default:
      return state;
  }
};

export const initialState = {
  isSearching: true,
  isEditing: false,
  isLoading: false,
  err: false,
  errMessage: "",
};
