import edeRequest from "..";
import { IAccount } from "./type";
enum LoginApi {
  AccountLogin = "/login"
}

export function accountLoginRequest(account: IAccount) {
  edeRequest.post({
    url: LoginApi.AccountLogin,
    data: account
  });
}
