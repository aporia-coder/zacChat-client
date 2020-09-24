const initialState = {
  users: ["ZacBot"],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
}
