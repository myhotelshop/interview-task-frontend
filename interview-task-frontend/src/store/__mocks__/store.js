import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const getters = {

DICENUMBERARRAY: jest.fn().mockReturnValue([
1,2,3,4,5
]),
SCORE: jest.fn().mockReturnValue([
0,0,0,0,0,10
])
};

export const mutations = {
    SET_DICENUMBERARRAY: jest.fn(),
    SET_SCORE: jest.fn()
};

export const actions = {
    GET_DICENUMBERARRAY: jest.fn(),
    GET_SCORE: jest.fn()
};

export const state = {
    DICENUMBERARRAY: jest.fn().mockReturnValue([
        1,2,3,4,5
        ]),
        SCORE: jest.fn().mockReturnValue([
        0,0,0,0,0,10
        ])
  }

  export function __createMocks(custom = { getters: {}, mutations: {}, actions: {}, state: {} }) {
    const mockGetters = Object.assign({}, getters, custom.getters);
    const mockMutations = Object.assign({}, mutations, custom.mutations);
    const mockActions = Object.assign({}, actions, custom.actions);
    const mockState = Object.assign({}, state, custom.state);
  
    return {
      getters: mockGetters,
      mutations: mockMutations,
      actions: mockActions,
      state: mockState,
      store: new Vuex.Store({
        getters: mockGetters,
        mutations: mockMutations,
        actions: mockActions,
        state: mockState,
      }),
    };
  }
  
  export const store = __createMocks().store;