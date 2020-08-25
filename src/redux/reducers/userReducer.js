const initialState = {
  userName: "Zac",
  joinMsg: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        joinMsg: `Welcome ${action.payload}`,
      };
    default:
      return state;
  }
}
