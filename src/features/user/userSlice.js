const initialState = {
  username: "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/updateName":
      return { ...state, username: action.payload };

    default:
      return state;
  }
}

/////////////////////////////////////////////////////////////////////////

export function updateName(username) {
  return { type: "user/updateName", payload: username };
}

/////////////////////////////////////////////////////////////////////////

export function getUsername(store) {
  return store.user.username;
}
