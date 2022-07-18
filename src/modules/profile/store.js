import { UserService } from "./services";

export const SET_USER = "SET_USER";
export const GET_USER = "GET_USER";
export const FETCH_USER_BY_ID = "FETCH_USER_BY_ID";
export const FETCH_ALL_USER = "FETCH_ALL_USER";

export const ProfileStore = {
  state: {
    user: null,
  },
  mutations: {
    [SET_USER]: (state, { user }) => {
      state.user = user;
    },
  },
  getters: {
    [GET_USER]: (state) => {
      return state.user;
    },
  },
  actions: {
    [FETCH_USER_BY_ID]: async ({ commit }, { id }) => {
      commit(SET_USER, { user: null });
      const user = await UserService.getUser(id);
      commit(SET_USER, { user });
    },
    [FETCH_ALL_USER]: async ({ commit }) => {
      commit(SET_USER, { user: null });
      const user = await UserService.getAllUsers();
      commit(SET_USER, { user });
    },
  },
};
