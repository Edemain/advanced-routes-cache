import { Module } from "vuex";
import { ILoginState } from "./type";
import { IRootState } from "../type";
import { accountLoginRequest } from "@/service/login/login";
import { IAccount } from "@/service/login/type";
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
    async accountLoginAction({ commit }, payload: IAccount) {
      const res = await accountLoginRequest(payload);
      console.log(res);
    }
  }
};

export default loginModule;
