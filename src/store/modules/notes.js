export default {
    state: {
        notes: [
            {
                id: 1, title: 'Note1', text: 'Note1 text', category: 'Personal'
            },
            {
                id: 2, title: 'Note2', text: 'Note2 text', category: 'Work'
            }
        ]
    },
    getters: {
        notes(state) {
            return state.notes
        }
    },
    actions: {
        postNote({commit}, newNote) {
            commit('addNote', newNote)
        },
    },
    mutations: {
        addNote(state, newNote) {
            state.notes.push(newNote)
        }
    }
}