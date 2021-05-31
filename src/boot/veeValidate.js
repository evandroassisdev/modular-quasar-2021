import Vue from "vue";
import {
  localize,
  ValidationProvider,
  extend,
  ValidationObserver
} from "vee-validate";
import * as rules from "vee-validate/dist/rules";

import ptBR from "vee-validate/dist/locale/pt_BR.json";

localize("ptBR", ptBR);

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
