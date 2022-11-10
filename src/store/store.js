import { createStore } from 'vuex'

export default createStore({
    state: {
        user: null,
        token: null,
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
        SET_TOKEN(state, token) {
            state.token = token;
        },
        CLEAR(state) {
            state.user = null;
        },
    },
    actions: {
        SET_USER({ commit }, user) {
            commit('SET_USER', user);
        },
        SET_TOKEN({ commit }, token) {
            commit('SET_TOKEN', token);
        },
        CLEAR({ commit }) {
            commit('CLEAR');
        },
    },
    getters: {
    }
})
