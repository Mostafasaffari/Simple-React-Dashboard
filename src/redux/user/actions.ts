import { IUserActions, SET_TOKEN, DELETE_TOKEN } from "./types";

const actions: IUserActions = {
  setToken: (token: string) => ({
    type: SET_TOKEN,
    token
  }),
  deleteToken: () => ({
    type: DELETE_TOKEN
  })
};

export default actions;
