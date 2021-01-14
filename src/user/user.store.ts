import { Module } from "vuex";
import { RootState } from '@/app/app.store';
export interface UserState {
  currentUser: string;
}
const store: Module<UserState, RootState> = ({
  namespaced: true,
  state: {
    currentUser: ''
  },
  getters: {
    gettercurrentUser(state) {
      return state.currentUser;
    }
  },
  mutations: {
    setCurrentUser(state, data) {
      state.currentUser = data;
    }
  },
  actions: {
    getCurrentUser(context) {
      const user = 'lsc';
      context.commit('setCurrentUser', user);
    }
  }
});
export default store;