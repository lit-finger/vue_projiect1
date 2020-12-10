import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navFlag: true,
    homeIndex: 0,
    carToPay: [],
    keyWord: "",
  },
  mutations: {
    changeNavFlag(state, flag) {
      state.navFlag = flag;
    },
    changeHomeIndex(state, index) {
      if (index <= 3) {
        state.homeIndex = index;
      } else {
        state.homeIndex = 1;
      }
    },
    changeCarToPay(state, list) {
      state.carToPay = list;
    },
    changeKeyWord(state, str) {
      state.keyWord = str;
    }
  },
  actions: {},
  modules: {}
});