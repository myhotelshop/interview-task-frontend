import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        diceNumberArray: null,
        score: 0
    },
    getters: {
        DICENUMBERARRAY: state => {
            return state.diceNumberArray;
        },
        SCORE: state => {
            return state.score;
        }
    },
    mutations : {
        SET_DICENUMBERARRAY : (state,payload) => {
          state.diceNumberArray = payload
        },
        SET_SCORE : (state, payload) => {
            state.score = payload
        }
      },
      actions : {
        GET_DICENUMBERARRAY : (context,payload) => {
           context.commit("SET_DICENUMBERARRAY",payload);
        },
        GET_SCORE : (context,payload) => {
            context.commit("SET_SCORE",payload);
         }
      }

});