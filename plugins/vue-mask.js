import Vue from "vue";

import VueMask, { VueMaskDirective } from "v-mask";

Vue.use(VueMask);
Vue.directive("mask", VueMaskDirective);
