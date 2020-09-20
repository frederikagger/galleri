import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        loggedIn: false,
        token: '',
        paintings: []
    },
    getters: {
        loggedIn(state) {
            return state.loggedIn
        },
        token(state) {
            return state.token
        },
        paintings(state) {
            return state.paintings
        }
    },
    mutations: {
        ADD_PAINTINGS(state, payload) {
            state.paintings = state.paintings.concat(payload)
        },
        SET_LOGGED_IN(state) {
            state.loggedIn = true;
        },
        SET_LOGGED_OUT(state) {
            state.loggedIn = false;
        },
        SET_TOKEN(state, value) {
            state.token = value;
        },
        CLEAR_TOKEN(state) {
            state.token = ''
        }
    },
    actions: {
        login({commit}, token) {
            commit("SET_LOGGED_IN");
            commit("SET_TOKEN", token);
        },
        logout({commit}) {
            commit("SET_LOGGED_OUT");
            commit("CLEAR_TOKEN");
        },
        savePaintings({commit}, paintings) {
            commit("ADD_PAINTINGS", paintings)
        }
    }
});
