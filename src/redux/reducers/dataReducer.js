export const initialState = {
  General: [
    {
      from: "Zac",
      msg: "Welcome to the General channel!",
    },
  ],
  Philosophy: [
    {
      from: "Zac",
      msg: "Welcome to the Philosophy channel!",
    },
  ],
  Technology: [
    {
      from: "Zac",
      msg: "Welcome to the Technology channel!",
    },
  ],
  Music: [
    {
      from: "Zac",
      msg: "Welcome to the Music channel!",
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        [action.payload.topic]: [
          ...state[action.payload.topic],
          {
            from: action.payload.from,
            msg: action.payload.msg,
          },
        ],
      };
    case "IS_TYPING":
      return {
        ...state,
      };
    default:
      return state;
  }
}
