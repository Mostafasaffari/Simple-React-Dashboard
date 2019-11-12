import { IUserState, UserActionTypes, SET_TOKEN, DELETE_TOKEN } from "./types";
import Storage from "../../helpers/localStorage";

const initialState: IUserState = {
  token: Storage().get("token") || ""
};

export const userReducer = (
  state = initialState,
  action: UserActionTypes
): IUserState => {
  switch (action.type) {
    case SET_TOKEN:
      Storage().set("token", action.token);
      return {
        ...state,
        token: action.token
      };

    case DELETE_TOKEN:
      Storage().set("token", "");
      return {
        ...state,
        token: ""
      };
    default:
      return state;
  }
};
