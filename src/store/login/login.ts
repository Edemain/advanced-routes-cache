import { 
  Module } from "vuex";
import { ILoginState } from "./type";
import { IRootState } from "../type";
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: []
    };
  },
  getters: {},
  mutations: {},
  actions: {
    accountLoginAction(context, payload) {
      console.log("用户名登陆", context, payload);
    }
  }
};

export default loginModule;
