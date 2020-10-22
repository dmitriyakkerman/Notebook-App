import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        notes: JSON.parse(localStorage.getItem('notes')) || []
    },
    getters: {
        getNotes(state) {
            return state.notes
        }
    },
    actions: {
        postNote({commit}, newNote) {
            commit('addNote', newNote)
        }
    },
    mutations: {
        addNote(state, newNote) {
            state.notes.push(newNote);

            localStorage.setItem('notes', JSON.stringify(state.notes));
        }
    }
})