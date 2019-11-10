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
      return {
        ...state,
        token: action.token
      };

    case DELETE_TOKEN:
      return {
        ...state,
        token: ""
      };
    default:
      return state;
  }
};
