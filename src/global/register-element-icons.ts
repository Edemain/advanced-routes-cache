import { App } from "vue";
import { User, Iphone } from "@element-plus/icons";

const components = [User, Iphone];

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
