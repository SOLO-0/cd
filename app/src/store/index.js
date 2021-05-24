import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: []
    },
    mutations: {
        SET_DATA: (state, payload) => {
            state.data = payload
        },
        DELETE_CARD_DATA: (state, payload) => {
            state.data = state.data.filter(value => value.number !== payload)
        },
        ADD_CARD: (state, payload) => {
            state.data.unshift(payload)
        }
    },
    actions: {
        DATA: ({ state, commit }) => {
            if (!state.data.length) {
                axios.get('https://fakerapi.it/api/v1/credit_cards?_quantity=20')
                    .then(res => commit('SET_DATA', res.data.data))
            }
        },
        DELETE_CARD: ({ commit }, payload) => {
            commit('DELETE_CARD_DATA', payload)
        },
        CREATE_CARD: ({ commit }, payload) => {
            commit('ADD_CARD', payload)
        }
    },
    getters: {
        GET_DATA: (state) => {
            return state.data
        }
    },
    modules: {},
});