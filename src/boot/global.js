import { MInput, Functions } from "admin.mbr.components";

export default ({ Vue }) => {
  Vue.prototype.$functions = Functions;
  Vue.component("MInput", MInput);
};
