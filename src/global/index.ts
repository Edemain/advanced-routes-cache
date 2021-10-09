import registerElementIcons from "./register-element-icons";
import { App } from "vue";
export function globalRegister(app: App): void {
  app.use(registerElementIcons);
}
