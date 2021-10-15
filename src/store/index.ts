import { createStore } from "vuex";
import { IRootState } from "./type";
import login from "./login/login";
export default createStore<IRootState>({
  state: {
    name: "",
    age: 99
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
});
