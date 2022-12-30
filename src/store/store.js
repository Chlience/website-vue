import { createStore } from 'vuex'

export default createStore({
    state: {
        user: null,
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
        CLEAR(state) {
            state.user = null;
        },
    },
    actions: {
        SET_USER({ commit }, user) {
            commit('SET_USER', user);
        },
        CLEAR({ commit }) {
            commit('CLEAR');
        },
    },
    getters: {
    }
})
