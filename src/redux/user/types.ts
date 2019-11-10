export const SET_TOKEN = "SET_TOKEN";
export const DELETE_TOKEN = "DELETE_TOKEN";

export interface IUserState {
  token: string;
}

interface ISetTokenAction {
  type: typeof SET_TOKEN;
  token: IUserState["token"];
}

interface IDeleteTokenAction {
  type: typeof DELETE_TOKEN;
}

export interface IUserActions {
  setToken: (token: IUserState["token"]) => ISetTokenAction;
  deleteToken: () => IDeleteTokenAction;
}

export type UserActionTypes = ISetTokenAction | IDeleteTokenAction;
