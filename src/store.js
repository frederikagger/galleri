import Vue from 'vue';
import Vuex from 'vuex';
import {firestore} from './firebase';
import {vuexfireMutations, firestoreAction} from 'vuexfire'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        loggedIn: false,
        token: '',
        paintings: [],
    },
    getters: {
        loggedIn(state) {
            return state.loggedIn;
        },
        token(state) {
            return state.token;
        },
        paintings(state) {
            return state.paintings;
        },
        paintingsSet(state) {
            return state.paintingsSet;
        },
    },
    mutations: {
        ...vuexfireMutations,
        SAVE_PAINTINGS(state, value) {
            state.paintings.push(value);
            state.paintingsSet.add(value.url);
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
            state.token = '';
        },
    },
    actions: {
        bindPaintings: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('paintings', firestore.orderBy('date','desc'))
        }),
        login({commit}, token) {
            commit('SET_LOGGED_IN');
            commit('SET_TOKEN', token);
        },
        logout({commit}) {
            commit('SET_LOGGED_OUT');
            commit('CLEAR_TOKEN');
        },
    },
});
