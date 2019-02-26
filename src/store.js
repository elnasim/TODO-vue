import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        text: 'задача 1',
        done: true,
      },
      {
        id: 2,
        text: 'задача 2',
        done: false,
      },
    ],
  },
  mutations: {
    SET_DONE_STATE (state, payload) {
      let index = state.todos.findIndex(item => {
        return item.id === payload
      })

      state.todos[index].done = !state.todos[index].done
    },

    ADD_TODO (state, payload) {
      let randomID = Math.floor(Math.random() * 10000) + 1
      let data = {
        id: randomID,
        text: payload,
        done: false,
      }
      state.todos.push(data)
    },

    EDIT_TODO (state, payload) {
      let index = state.todos.findIndex(item => {
        return item.id === payload[0]
      })

      state.todos[index].text = payload[1]
    },

    REMOVE (state, payload) {
      let index = state.todos.findIndex(item => {
        return item.id === payload
      })

      state.todos.splice(index, 1)
    },
  },
  actions: {
    setDoneState ({ commit }, payload) {
      commit('SET_DONE_STATE', payload)
    },

    addTodo ({ commit }, payload) {
      commit('ADD_TODO', payload)
    },

    remove ({ commit }, payload) {
      commit('REMOVE', payload)
    },

    editTodo ({ commit }, payload) {
      commit('EDIT_TODO', payload)
    },

  },
})
