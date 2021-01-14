import { createStore, createLogger } from "vuex";
import userStore, { UserState } from '@/user/user.store';
import logger from '@/app/app.plugins';
export interface RootState {
  name: string;
  content: string;
  loading: boolean;
  user?: UserState;
}
/**
 * 创建store
 */
const store = createStore({
  state: {
    name: "宁皓网",
    content: '',
    loading: false,
  },
  getters: {
    gettername(state) {
      return `getter:${state.name}`
    }
  },
  mutations: {
    setName(state, data) {
      state.name = data;
    },
    setLoading(state, data) {
      state.loading = data;
    },
    setContent(state, data) {
      state.content = data;
    }
  },
  actions: {
    getName(context) {
      const name2 = '从服务器获取的name';
      context.commit('setName', name2);
      console.log(context);
    },
    //以下是新写法
    //把commit这个方法从context这个对象里面解构出来
    getName1({ commit }) {
      const name1 = '从服务器获取的name1';
      commit('setName', name1);
      //console.log(rootState);
    },
    getContent({ commit }) {
      commit('setLoading', true);
      setTimeout(() => {
        const content = 'PostsData';
        commit('setContent', content);
        commit('setLoading', false);
      }, 3000)
    }

  },
  modules: {
    userStore,
  },
  plugins: [createLogger(), logger]
});
export default store;